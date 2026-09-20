import { readFile } from 'node:fs/promises';

const workflowPath = '.github/workflows/ci-deploy.yml';
const source = await readFile(workflowPath, 'utf8');

const requiredPatterns = [
  [/pull_request:\s*\n\s*branches:\s*\[master\]/m, 'master pull-request trigger'],
  [/push:\s*\n\s*branches:\s*\[master\]/m, 'master push trigger'],
  [/workflow_dispatch:/, 'manual trigger'],
  [/permissions:\s*\n\s*contents:\s*read/m, 'read-only repository permission'],
  [/cancel-in-progress:\s*false/, 'non-interruptible deployment concurrency'],
  [/uses:\s*actions\/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1/, 'pinned checkout action'],
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
    /uses:\s*actions\/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a/,
    'pinned upload-artifact action',
  ],
  [/name:\s*static-site/, 'static-site artifact'],
  [/needs:\s*\n\s*- verify/m, 'deploy waits for verification'],
  [
    /if:\s*>\s*github\.event_name != 'pull_request' &&\s*github\.ref == 'refs\/heads\/master'/m,
    'master-only deployment guard',
  ],
  [
    /uses:\s*actions\/download-artifact@37930b1c2abaa49bbe596cd826c3c89aef350131/,
    'pinned download-artifact action',
  ],
  [/FTP_HOST:\s*\$\{\{ vars\.FTP_HOST \}\}/, 'FTP host variable'],
  [/FTP_PORT:\s*\$\{\{ vars\.FTP_PORT \}\}/, 'FTP port variable'],
  [/FTP_USERNAME:\s*\$\{\{ secrets\.FTP_USERNAME \}\}/, 'FTP username secret'],
  [/FTP_PASSWORD:\s*\$\{\{ secrets\.FTP_PASSWORD \}\}/, 'FTP password secret'],
  [/sudo apt-get install --yes lftp/, 'lftp installation'],
  [/set ftp:ssl-force true/, 'explicit FTPS requirement'],
  [/set ftp:ssl-protect-data true/, 'encrypted FTP data channel'],
  [/set ssl:verify-certificate yes/, 'strict certificate validation'],
  [/mirror\s*\\\s*--reverse\s*\\\s*--delete/m, 'reverse mirror with stale-file deletion'],
  [/--exclude-glob=\.well-known\/\*\*/, 'ACME directory exclusion'],
  [/\.htaccess/, 'Apache configuration exclusion'],
  [/\.user\.ini/, 'user PHP configuration exclusion'],
  [/php\.ini/, 'PHP configuration exclusion'],
  [/\.ftpquota/, 'FTP quota exclusion'],
  [/out\/ \/\s*$/m, 'FTP document-root destination'],
  [/Verify production website/, 'live production verification'],
  [/https:\/\/peymanhosseini\.ir/, 'production URL'],
];

const failures = requiredPatterns
  .filter(([pattern]) => !pattern.test(source))
  .map(([, label]) => `missing: ${label}`);

const forbiddenPatterns = [
  [/dangerous-clean-slate/, 'dangerous clean-slate option'],
  [/ftp\.tabarestanco\.ir/, 'literal FTP server'],
  [/deploy-peyman@peymanhosseini\.ir/, 'literal FTP username'],
  [/SamKirkland\/FTP-Deploy-Action/, 'direct FTP action instead of the Tabarestan lftp flow'],
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
