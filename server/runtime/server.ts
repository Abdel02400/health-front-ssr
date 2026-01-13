import { ENV } from '@server-config/env';
import type { StartServerFunction } from '@server-types/serverRuntime';

export const startServer: StartServerFunction = (app) => {
    app.listen(ENV.port, () => console.info(`SSR running : ${ENV.host}`));
};