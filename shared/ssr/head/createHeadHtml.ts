import { injectCriticalStyle } from '@shared-ssr/head/injectCriticalStyle';
import { injectDevFoucStyle } from './injectDevFoucStyle';
import { ENV } from '@server-config/env';

export type CreateHeadHtmlFunction = (nonce: string) => string;

export const createHeadHtml: CreateHeadHtmlFunction = (nonce) => {
    const parts = [injectCriticalStyle(nonce)];

    if (!ENV.isProduction) parts.push(injectDevFoucStyle(nonce));

    return parts.join('\n');
};
