# Static FTPS CI/CD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Next.js portfolio as a verified static export and deploy it automatically from `master` to `peymanhosseini.ir` over explicit FTPS.

**Architecture:** One GitHub Actions workflow validates pull requests and production pushes with the same npm install, quality checks, and static build. Deployment is a final, master-only step that incrementally synchronizes `out/` to the FTP account's document-root directory while preserving cPanel-managed files.

**Tech Stack:** Next.js 16, TypeScript, Node.js 24, npm, GitHub Actions, SamKirkland FTP Deploy Action, explicit FTPS on port 21

**Spec:** `docs/superpowers/specs/2026-09-20-static-ftps-ci-cd-design.md`

## Global Constraints

- Production URL is exactly `https://peymanhosseini.ir`.
- Production source branch is exactly `master`.
- Static build output is exactly `out/`; the deployed site must not require a Node.js process.
- FTPS protocol is explicit `ftps` on port `21`.
- FTP destination is `./`, relative to the dedicated FTP account rooted at `/home/kyukyrwo/peymanhosseini.ir`.
- FTP connection values come only from `FTP_SERVER`, `FTP_USERNAME`, and `FTP_PASSWORD` GitHub Actions secrets.
- `.well-known/**`, `.htaccess`, `.user.ini`, `php.ini`, and `.ftpquota` must remain outside deployment deletion.
- `dangerous-clean-slate` must never be enabled.
- Workflow actions must be pinned to immutable commit SHAs.

## Review Focus

- A pull request must run all checks and static generation but must never reach the FTPS step; Task 2 verifies the exact deployment condition.
- A manual workflow run from a non-`master` ref must not deploy production; Task 2 verifies the branch guard.
- FTP host, username, or password literals must not appear in the workflow; Task 2 checks the three secret references and rejects known credential literals.
- Every known project slug and required metadata file must exist in `out/`; Task 1 verifies all six project routes and metadata outputs.
- Existing cPanel-managed files must not be deleted; Task 2 verifies exclusions and rejects `dangerous-clean-slate`.

---

### Task 1: Produce and verify a serverless static export

**Files:**
- Create: `scripts/verify-static-export.mjs`
- Create: `package-lock.json`
- Modify: `package.json`
- Modify: `next.config.ts`
- Delete: `src/app/api/health/route.ts`

**Interfaces:**
- Consumes: `npm run build`, the six slugs in `src/features/projects/data/projects.ts`, and static metadata routes under `src/app`.
- Produces: `npm run verify:export` and a validated `out/` directory for Task 2.

- [ ] **Step 1: Add the static-export verification script**

Create `scripts/verify-static-export.mjs`:

```js
import { access } from 'node:fs/promises';

const projectSlugs = [
  'ewano-pwa',
  'mci-pwa',
  'my-tci',
  'tabarestan',
  'alovilaa',
  'baham-tech',
];

const requiredPaths = [
  'out/index.html',
  'out/404.html',
  'out/robots.txt',
  'out/sitemap.xml',
  'out/opengraph-image.png',
  'out/_next/static',
  ...projectSlugs.map((slug) => `out/projects/${slug}/index.html`),
];

const forbiddenPaths = ['out/api/health', 'out/api/health.json'];
const failures = [];

for (const path of requiredPaths) {
  try {
    await access(path);
  } catch {
    failures.push(`missing: ${path}`);
  }
}

for (const path of forbiddenPaths) {
  try {
    await access(path);
    failures.push(`unexpected runtime route: ${path}`);
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      throw error;
    }
  }
}

if (failures.length > 0) {
  throw new Error(`Static export verification failed:\n${failures.join('\n')}`);
}

console.log(`Static export verified (${requiredPaths.length} required paths).`);
```

Add this script to `package.json` after `build`:

```json
"verify:export": "node scripts/verify-static-export.mjs"
```

- [ ] **Step 2: Run the verifier before implementation and confirm RED**

Run: `npm run verify:export`

Expected: exit code `1` with at least `missing: out/index.html`, because no static export exists yet.

- [ ] **Step 3: Configure Next.js for Apache-compatible static output**

Update `next.config.ts` so the configuration includes these properties before `poweredByHeader`:

```ts
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
  turbopack: {
    root: process.cwd(),
  },
};
```

Delete `src/app/api/health/route.ts`; the build-time timestamp would not be a runtime health check on static hosting.

- [ ] **Step 4: Create the npm lockfile used by CI**

Run: `npm install --package-lock-only --ignore-scripts`

Expected: exit code `0` and a tracked `package-lock.json` whose root package name is `next16-mui9-boilerplate`.

- [ ] **Step 5: Build the production export**

Run: `NEXT_PUBLIC_SITE_URL=https://peymanhosseini.ir npm run build`

Expected: exit code `0`; Next.js reports static output for `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and all six `/projects/[slug]` values.

- [ ] **Step 6: Verify GREEN and run project checks**

Run: `npm run verify:export`

Expected: exit code `0` and `Static export verified (12 required paths).`

Run: `npm run check`

Expected: exit code `0` with TypeScript, ESLint, and Prettier all passing.

- [ ] **Step 7: Commit the static-export change**

```bash
git add next.config.ts package.json package-lock.json scripts/verify-static-export.mjs src/app/api/health/route.ts
git commit -m "build: enable verified static export"
```

### Task 2: Add guarded GitHub Actions CI and FTPS deployment

**Files:**
- Create: `scripts/verify-ci-workflow.mjs`
- Create: `.github/workflows/ci-deploy.yml`
- Modify: `package.json`

**Interfaces:**
- Consumes: `npm run check`, `npm run build`, and `npm run verify:export` from Task 1.
- Produces: `npm run verify:workflow` and the master-only CI/deployment workflow consumed by Task 3 documentation.

- [ ] **Step 1: Add the workflow security verifier**

Create `scripts/verify-ci-workflow.mjs`:

```js
import { readFile } from 'node:fs/promises';

const workflowPath = '.github/workflows/ci-deploy.yml';
const source = await readFile(workflowPath, 'utf8');

const requiredPatterns = [
  [/pull_request:\s*\n\s*branches:\s*\[master\]/m, 'master pull-request trigger'],
  [/push:\s*\n\s*branches:\s*\[master\]/m, 'master push trigger'],
  [/workflow_dispatch:/, 'manual trigger'],
  [/permissions:\s*\n\s*contents:\s*read/m, 'read-only repository permission'],
  [/cancel-in-progress:\s*false/, 'non-interruptible deployment concurrency'],
  [
    /uses:\s*actions\/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1/,
    'pinned checkout action',
  ],
  [
    /uses:\s*actions\/setup-node@820762786026740c76f36085b0efc47a31fe5020/,
    'pinned setup-node action',
  ],
  [/node-version:\s*24/, 'Node.js 24'],
  [/run:\s*npm ci/, 'locked dependency install'],
  [/run:\s*npm run verify:workflow/, 'workflow verification'],
  [/run:\s*npm run check/, 'quality checks'],
  [/run:\s*npm run build/, 'production build'],
  [/run:\s*npm run verify:export/, 'static-export verification'],
  [
    /if:\s*github\.ref == 'refs\/heads\/master' && \(github\.event_name == 'push' \|\| github\.event_name == 'workflow_dispatch'\)/,
    'master-only deployment guard',
  ],
  [
    /uses:\s*SamKirkland\/FTP-Deploy-Action@110f9186c050f71550953127052e77650219c287/,
    'pinned FTP deploy action',
  ],
  [/server:\s*\$\{\{ secrets\.FTP_SERVER \}\}/, 'FTP server secret'],
  [/username:\s*\$\{\{ secrets\.FTP_USERNAME \}\}/, 'FTP username secret'],
  [/password:\s*\$\{\{ secrets\.FTP_PASSWORD \}\}/, 'FTP password secret'],
  [/protocol:\s*ftps/, 'explicit FTPS'],
  [/port:\s*21/, 'FTPS port 21'],
  [/local-dir:\s*\.\/out\//, 'static output source'],
  [/server-dir:\s*\.\//, 'FTP document root'],
  [/security:\s*strict/, 'strict certificate validation'],
  [/\.well-known\/\*\*/, 'ACME directory exclusion'],
  [/\.htaccess/, 'Apache configuration exclusion'],
  [/\.user\.ini/, 'user PHP configuration exclusion'],
  [/php\.ini/, 'PHP configuration exclusion'],
  [/\.ftpquota/, 'FTP quota exclusion'],
];

const failures = requiredPatterns
  .filter(([pattern]) => !pattern.test(source))
  .map(([, label]) => `missing: ${label}`);

const forbiddenPatterns = [
  [/dangerous-clean-slate/, 'dangerous clean-slate option'],
  [/ftp\.tabarestanco\.ir/, 'literal FTP server'],
  [/deploy-peyman@peymanhosseini\.ir/, 'literal FTP username'],
];

for (const [pattern, label] of forbiddenPatterns) {
  if (pattern.test(source)) {
    failures.push(`forbidden: ${label}`);
  }
}

if (failures.length > 0) {
  throw new Error(`CI workflow verification failed:\n${failures.join('\n')}`);
}

console.log('CI workflow verified.');
```

Add this script to `package.json` after `verify:export`:

```json
"verify:workflow": "node scripts/verify-ci-workflow.mjs"
```

- [ ] **Step 2: Run the verifier before creating the workflow and confirm RED**

Run: `npm run verify:workflow`

Expected: exit code `1` with `ENOENT` for `.github/workflows/ci-deploy.yml`.

- [ ] **Step 3: Create the CI and deployment workflow**

Create `.github/workflows/ci-deploy.yml`:

```yaml
name: CI and Deploy

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: ci-deploy-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: false

jobs:
  validate-and-deploy:
    name: Validate and deploy
    runs-on: ubuntu-latest
    timeout-minutes: 20
    env:
      NEXT_PUBLIC_SITE_URL: https://peymanhosseini.ir

    steps:
      - name: Checkout repository
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1

      - name: Set up Node.js
        uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7.0.0
        with:
          node-version: 24
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Verify workflow policy
        run: npm run verify:workflow

      - name: Run quality checks
        run: npm run check

      - name: Build static site
        run: npm run build

      - name: Verify static export
        run: npm run verify:export

      - name: Deploy over explicit FTPS
        if: github.ref == 'refs/heads/master' && (github.event_name == 'push' || github.event_name == 'workflow_dispatch')
        uses: SamKirkland/FTP-Deploy-Action@110f9186c050f71550953127052e77650219c287 # v4.4.0
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          protocol: ftps
          port: 21
          security: strict
          local-dir: ./out/
          server-dir: ./
          timeout: 60000
          exclude: |
            **/.git*
            **/.git*/**
            **/node_modules/**
            .well-known/**
            .htaccess
            .user.ini
            php.ini
            .ftpquota
```

- [ ] **Step 4: Verify GREEN and re-run project checks**

Run: `npm run verify:workflow`

Expected: exit code `0` and `CI workflow verified.`

Run: `npm run check`

Expected: exit code `0` with the new JavaScript and YAML files accepted by ESLint and Prettier.

- [ ] **Step 5: Commit the workflow**

```bash
git add .github/workflows/ci-deploy.yml package.json scripts/verify-ci-workflow.mjs
git commit -m "ci: deploy static site over FTPS"
```

### Task 3: Document repository setup and perform release verification

**Files:**
- Create: `docs/deployment.md`

**Interfaces:**
- Consumes: the `FTP_SERVER`, `FTP_USERNAME`, and `FTP_PASSWORD` secret names and `Validate and deploy` check name from Task 2.
- Produces: exact GitHub repository setup instructions and a repeatable release checklist for the repository owner.

- [ ] **Step 1: Write the repository setup guide**

Create `docs/deployment.md` with these sections and exact values:

```markdown
# انتشار خودکار سایت

سایت پس از موفقیت بررسی‌ها و ساخت خروجی استاتیک، از شاخه `master` با Explicit FTPS روی هاست منتشر می‌شود.

## GitHub Actions Secrets

در مخزن GitHub وارد `Settings > Secrets and variables > Actions` شوید و با گزینه `New repository secret` این سه Secret را بسازید:

| Secret | Value |
| --- | --- |
| `FTP_SERVER` | `ftp.tabarestanco.ir` |
| `FTP_USERNAME` | `deploy-peyman@peymanhosseini.ir` |
| `FTP_PASSWORD` | رمز حساب FTP ساخته‌شده در cPanel |

رمز FTP را در فایل، Issue، Pull Request یا لاگ قرار ندهید.

## تنظیمات Actions

در `Settings > Actions > General` اجرای GitHub Actions را فعال نگه دارید. Workflow فقط مجوز خواندن محتوای مخزن را درخواست می‌کند و برای Push به `master` یا اجرای دستی روی همین شاخه Deploy انجام می‌دهد.

پس از اولین اجرای workflow، برای محافظت از شاخه می‌توانید در `Settings > Branches` یک Branch protection rule برای `master` بسازید و Status Check با نام `Validate and deploy` را اجباری کنید.

## اولین انتشار

1. سه Secret بالا را ایجاد کنید.
2. تغییرات CI/CD را به `master` پوش کنید؛ workflow خودکار اجرا می‌شود.
3. در تب `Actions` اجرای `CI and Deploy` را باز کنید و موفقیت مرحله `Deploy over explicit FTPS` را ببینید.
4. آدرس `https://peymanhosseini.ir`، یک صفحه پروژه، `robots.txt`، `sitemap.xml` و صفحه 404 را بررسی کنید.
5. پس از فعال‌شدن SSL دامنه، در cPanel گزینه `Force HTTPS Redirect` را برای `peymanhosseini.ir` فعال کنید.

## انتشار دستی و بازیابی

برای انتشار دستی، در تب `Actions`، workflow با نام `CI and Deploy` را انتخاب و `Run workflow` را روی شاخه `master` اجرا کنید.

برای بازیابی نسخه قبلی، commit مشکل‌دار را revert کنید و نتیجه را به `master` پوش کنید. workflow خروجی commit بازیابی‌شده را دوباره منتشر می‌کند.
```

- [ ] **Step 2: Validate documentation and the complete project**

Run: `npm ci`

Expected: exit code `0`; npm installs only versions recorded in `package-lock.json`.

Run: `npm run verify:workflow`

Expected: exit code `0` and `CI workflow verified.`

Run: `npm run check`

Expected: exit code `0`.

Run: `NEXT_PUBLIC_SITE_URL=https://peymanhosseini.ir npm run build`

Expected: exit code `0` and an `out/` static export.

Run: `npm run verify:export`

Expected: exit code `0` and `Static export verified (12 required paths).`

Run: `git diff --check`

Expected: exit code `0` with no whitespace errors.

- [ ] **Step 3: Commit the deployment guide**

```bash
git add docs/deployment.md
git commit -m "docs: add GitHub deployment setup"
```

- [ ] **Step 4: Review the final branch against the spec**

Confirm all of these facts from the final diff and fresh command output:

- Pull requests run validation without deploying.
- Pushes and manual runs deploy only when `github.ref` is `refs/heads/master`.
- Every workflow action is pinned to its immutable SHA.
- No FTP credential value appears in `.github/workflows/ci-deploy.yml`.
- Static output contains every known project route and metadata route.
- Host-managed files are excluded and clean-slate deletion is absent.
- GitHub setup instructions contain the exact three required Secret names.
