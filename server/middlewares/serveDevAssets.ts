import express from 'express';
import { CLIENT_ASSETS_PATH } from '@server-config/paths';
import { ROUTES } from '@server-config/routes';
import type { ExpressSetupFunction } from '@server-types/middlewares';

export const serveDevAssets: ExpressSetupFunction = (app) => {
    app.use(ROUTES.ASSETS, express.static(CLIENT_ASSETS_PATH));
};