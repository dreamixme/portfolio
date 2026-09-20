import { access } from 'node:fs/promises';

const projectSlugs = ['ewano-pwa', 'mci-pwa', 'my-tci', 'tabarestan', 'alovilaa', 'baham-tech'];

const requiredPaths = [
  'out/index.html',
  'out/404.html',
  'out/robots.txt',
  'out/sitemap.xml',
  'out/opengraph-image',
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
