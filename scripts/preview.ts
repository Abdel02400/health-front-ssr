import { execSync } from 'node:child_process';
import fs from 'node:fs';
import { DIST_PATH, SERVER_APP_DIST_ENTRY_FILE } from '@server-config/paths.ts';

if (fs.existsSync(DIST_PATH)) {
    execSync('pnpm clean', { stdio: 'inherit' });
}

console.info('Build missing, triggering build...');
execSync('pnpm build', { stdio: 'inherit' });

console.info('Starting production server...');
execSync(
    `cross-env NODE_ENV=production node ${SERVER_APP_DIST_ENTRY_FILE}`,
    { stdio: 'inherit' }
);