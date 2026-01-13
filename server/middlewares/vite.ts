import { createServer } from 'vite';
import { serveDevAssets } from '@server-middlewares/serveDevAssets';
import type { SetupViteFunction } from '@server-types/vite';

export const setupVite: SetupViteFunction = async (app) => {
    const vite = await createServer({
        appType: 'custom',
        server: { middlewareMode: true }
    });

    serveDevAssets(app);
    app.use(vite.middlewares);

    return vite;
};