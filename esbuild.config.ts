import type { BuildOptions } from 'esbuild';
import { SERVER_APP_DIST_ENTRY_FILE, SERVER_ENTRY_PATH } from '@server-config/paths';

export const serverBuildOptions: BuildOptions = {
    entryPoints: [SERVER_ENTRY_PATH],
    bundle: true,
    minify: true,
    platform: 'node',
    target: 'node20',
    outfile: SERVER_APP_DIST_ENTRY_FILE,
    format: 'esm',
    packages: 'external',
    tsconfig: 'tsconfig.server.json',
};
