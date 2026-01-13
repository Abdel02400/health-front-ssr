import { ROUTES } from '@server-config/routes';
import type { ShouldSkipSSRFunction } from '@server-types/ssr';

export const shouldSkipSSR: ShouldSkipSSRFunction = (req) => {
    const { originalUrl } = req;

    const isAsset = originalUrl.startsWith(ROUTES.ASSETS);
    const isFile = originalUrl.includes('.');

    if (isAsset || isFile) return true;

    return !req.accepts('html');
};