import compression from 'compression';
import type { ExpressSetupFunction } from '@server-types/middlewares';

export const setupProduction: ExpressSetupFunction = (app) => {
    app.use(compression());
};