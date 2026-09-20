# Static FTPS CI/CD Design

**Date:** 2026-09-20
**Status:** Approved in conversation; awaiting written-spec review

## Goal

Deploy the production portfolio at `https://peymanhosseini.ir` automatically from the GitHub repository while keeping pull requests protected by the same validation and static build used for production.

The hosting account serves static files from `/home/kyukyrwo/peymanhosseini.ir`. The dedicated FTP account is expected to open directly in that document root, so the deployment destination is `./` relative to the FTP login.

## Selected Approach

Use one GitHub Actions workflow for both continuous integration and deployment:

- Pull requests targeting `master` run validation and a production static build without deploying.
- Pushes to `master` run the same validation and build, then deploy the generated `out/` directory over explicit FTPS.
- `workflow_dispatch` allows a manual production deployment when needed.

This keeps the production path small and ensures the exact output that passed CI is the output sent to the host. Separate build and deployment workflows or a custom `lftp` script are unnecessary for this portfolio.

## Static Export Changes

`next.config.ts` will enable:

- `output: 'export'` to generate the `out/` directory.
- `trailingSlash: true` so Apache can serve nested project pages through directory `index.html` files without custom rewrite rules.
- `images.unoptimized: true` because the default Next.js image optimization service requires a running Next.js server.

The project detail route already uses `generateStaticParams()` and disables unknown dynamic parameters, so every known project page can be generated at build time.

The current `/api/health` handler returns a runtime timestamp. A static host cannot provide a runtime health endpoint, and the route is not consumed by the portfolio, so it will be removed rather than exported as misleading build-time JSON.

Metadata routes such as `robots`, `sitemap`, and the Open Graph image remain part of the build and must be verified in `out/`.

## Dependency Reproducibility

The repository ignores `yarn.lock` and currently has no tracked package-manager lockfile. CI will standardize on npm:

- Generate and commit `package-lock.json` from the existing `package.json`.
- Use Node.js 24, consistent with the project's Node typings and `engines.node` requirement.
- Install with `npm ci` in GitHub Actions.

No production dependency is added for deployment.

## Workflow

Create `.github/workflows/ci-deploy.yml` with minimal `contents: read` permissions.

The job performs these steps in order:

1. Check out the repository using a pinned, current official checkout action.
2. Configure Node.js 24 and npm caching using a pinned, current official setup-node action.
3. Install exactly the versions in `package-lock.json` with `npm ci`.
4. Run the existing `npm run check` command.
5. Run `npm run build` with `NEXT_PUBLIC_SITE_URL=https://peymanhosseini.ir`.
6. On a push to `master` or a manual run, upload only `out/` through a pinned release of `SamKirkland/FTP-Deploy-Action`.

The FTPS deployment uses:

- Server: `${{ secrets.FTP_SERVER }}`
- Username: `${{ secrets.FTP_USERNAME }}`
- Password: `${{ secrets.FTP_PASSWORD }}`
- Protocol: `ftps` (explicit FTPS)
- Port: `21`
- Local directory: `./out/`
- Server directory: `./`

The production build uses a workflow concurrency group with cancellation disabled. A newer push waits for an in-progress upload instead of interrupting it and leaving a partially updated site.

## Remote File Safety

The action will use incremental synchronization and will not enable `dangerous-clean-slate`.

Deployment exclusions protect host-managed files and directories that already exist in the document root:

- `.well-known/**`
- `.htaccess`
- `.user.ini`
- `php.ini`
- `.ftpquota`

Application files previously tracked by the deployment action may be updated or removed when the generated static output changes. Host-managed files remain outside that lifecycle.

Strict FTPS certificate validation remains enabled. Certificate errors must fail the workflow instead of silently lowering transport security.

## Secrets and Sensitive Data

No FTP credential is committed to the repository or printed by project scripts. Before the first deployment, the repository must define these GitHub Actions secrets:

- `FTP_SERVER=ftp.tabarestanco.ir`
- `FTP_USERNAME=deploy-peyman@peymanhosseini.ir`
- `FTP_PASSWORD`: the password for the dedicated FTP account, stored only in GitHub Secrets

Only the password is inherently secret, but keeping all connection fields in GitHub Secrets makes host changes possible without another code change.

## Failure Handling

- Formatting, lint, type generation, type checking, or static build failures stop the job before any FTP connection.
- Missing secrets or FTPS authentication errors fail the deployment step visibly in GitHub Actions.
- The action is not allowed to continue on error.
- A failed or interrupted deployment can be retried from GitHub Actions after the connection problem is fixed.
- Restoring an earlier release is done by reverting to the desired Git commit and running the workflow again.

## Verification

Before committing implementation changes locally:

1. Run `npm ci` using the generated lockfile.
2. Run `npm run check`.
3. Run `NEXT_PUBLIC_SITE_URL=https://peymanhosseini.ir npm run build`.
4. Confirm that `out/index.html`, `out/404.html`, metadata outputs, static assets, and all known `out/projects/<slug>/index.html` pages exist.
5. Inspect the workflow syntax and confirm deployment is gated to `master` pushes and manual runs.

After the three repository secrets are configured, the first real workflow run validates FTPS authentication and the server-relative `./` destination. The live site should then be checked over HTTPS, including the home page, one project detail route, static assets, robots, sitemap, and the 404 page.

## Success Criteria

- Pull requests cannot deploy and must pass the production-equivalent static build.
- Every successful push to `master` publishes the generated static portfolio through explicit FTPS.
- FTP credentials never appear in tracked files.
- cPanel-managed files in the domain document root remain untouched.
- The deployed site works without a Node.js process.
