import express from 'express';
import { CLIENT_DIST_ASSETS_PATH, CLIENT_DIST_PATH } from '@server-config/paths';
import { ROUTES } from '@server-config/routes';
import { CACHE_DURATIONS } from '@server-config/cache';
import type { ExpressSetupFunction } from '@server-types/middlewares';

export const serveStaticAssets: ExpressSetupFunction = (app) => {
    app.use(
        ROUTES.ASSETS,
        express.static(CLIENT_DIST_ASSETS_PATH, {
            immutable: true,
            maxAge: CACHE_DURATIONS.HASHED_ASSETS,
        })
    );

    app.use(
        express.static(CLIENT_DIST_PATH, {
            maxAge: CACHE_DURATIONS.PUBLIC_FILES,
            index: false,
        })
    );
};