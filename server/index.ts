import express, { type Express } from 'express';
import type { ServerRuntime } from '@server-types/serverRuntime';
import { securityMiddleware } from '@server-middlewares/security';
import { setupEnvironment } from '@server-runtime/environment';
import { setupSSR } from '@server-runtime/ssr';
import { startServer } from '@server-runtime/server';

const app: Express = express();
const runtime: ServerRuntime = { app };

const init = async (): Promise<void> => {
    try {
        securityMiddleware(app);
        await setupEnvironment(app, runtime);
        setupSSR(app, runtime);
        startServer(app);
    } catch (error) {
        console.error('Failed to start server : ', error);
        process.exit(1);
    }
};

init();