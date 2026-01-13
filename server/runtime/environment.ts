import fs from 'node:fs/promises';
import { setupVite } from '@server-middlewares/vite';
import { setupProduction } from '@server-middlewares/production';
import { serveStaticAssets } from '@server-middlewares/serveStaticAssets';
import { ENV } from '@server-config/env';
import { CLIENT_INDEX_HTML_PATH } from '@server-config/paths';
import { type SetupEnvironmentFunction } from '@server-types/serverRuntime';

export const setupEnvironment: SetupEnvironmentFunction = async (app, runtime) => {
    if (!ENV.isProduction) {
        runtime.vite = await setupVite(app);
        console.info('Running in development mode');
        return;
    }

    runtime.templateHtml = await fs.readFile(CLIENT_INDEX_HTML_PATH, 'utf-8');

    setupProduction(app);
    serveStaticAssets(app);

    console.info('Running in production mode');
};