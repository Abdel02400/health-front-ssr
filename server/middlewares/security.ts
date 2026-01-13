import crypto from 'node:crypto';
import type { Request, Response, NextFunction } from 'express';
import { buildProdCspDirectives, buildCspHeader, CSP_HEADER_NAME, DEV_CSP_DIRECTIVES } from '@server-config/csp';
import { getSecurityHeaders } from '@server-config/securityHeaders';
import { ENV } from '@server-config/env';
import type { ExpressSetupFunction } from '@server-types/middlewares';

export const securityMiddleware: ExpressSetupFunction = (app) => {
    app.use((_req: Request, res: Response, next: NextFunction) => {
        const nonce = crypto.randomBytes(16).toString('base64');
        res.locals.cspNonce = nonce;

        const directives = ENV.isProduction ? buildProdCspDirectives(nonce) : DEV_CSP_DIRECTIVES;
        res.setHeader(CSP_HEADER_NAME, buildCspHeader(directives));

        getSecurityHeaders().forEach(({ name, value }) => { res.setHeader(name, value); });

        next();
    });
};