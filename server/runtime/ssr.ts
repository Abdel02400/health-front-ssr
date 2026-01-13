import { ssrMiddleware } from '@server-middlewares/ssr';
import type { SetupSSRFunction } from '@server-types/serverRuntime';

export const setupSSR: SetupSSRFunction = (app, runtime) => {
    app.use(ssrMiddleware(runtime));
};