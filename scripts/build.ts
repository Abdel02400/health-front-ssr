import esbuild from 'esbuild';
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { DIST_PATH, CLIENT_DIST_PATH, SERVER_DIST_PATH, ENTRY_SERVER_PATH } from '@server-config/paths';
import { serverBuildOptions } from '@esbuild-config';

execSync('pnpm validate:routes', { stdio: 'inherit' });

if (fs.existsSync(DIST_PATH)) {
    execSync('pnpm clean', { stdio: 'inherit' });
}

console.info('Building client...');
execSync(`vite build --outDir ${CLIENT_DIST_PATH}`, { stdio: 'inherit' });

console.info('Building SSR...');
execSync(
    `vite build --ssr ${ENTRY_SERVER_PATH} --outDir ${SERVER_DIST_PATH}`,
    { stdio: 'inherit' }
);

console.info('Building server app...');
await esbuild.build(serverBuildOptions);

console.info('Build completed successfully');