import type { Request, Response, NextFunction } from 'express';
import { renderPage } from '@server-render/renderPage';
import { shouldSkipSSR } from '@server-ssr/routing';
import { ENV } from '@server-config/env';
import type { SSRMiddlewareFactory } from '@server-types/ssr';

export const ssrMiddleware: SSRMiddlewareFactory = (runtime) => {
    return async function ssrHandler(req: Request, res: Response, next: NextFunction) {
        if (shouldSkipSSR(req)) return next();

        try {
            await renderPage(req, res, runtime);
        } catch (error) {
            if (error instanceof Error) {
                runtime.vite?.ssrFixStacktrace?.(error);
                console.error('SSR Error:', error);
                res.status(500).send(ENV.isProduction ? 'Internal Server Error' : error.stack);
            } else {
                console.error('SSR Unknown Error:', error);
                res.status(500).send('Internal Server Error');
            }
        }
    };
};