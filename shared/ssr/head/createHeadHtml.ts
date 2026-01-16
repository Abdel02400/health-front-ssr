import { injectCriticalStyle } from '@shared-ssr/head/injectCriticalStyle';
import { injectDevFoucStyle } from './injectDevFoucStyle';
import { ENV } from '@server-config/env';

export type CreateHeadHtmlFunction = (nonce: string, imagePreloads?: string) => string;

export const createHeadHtml: CreateHeadHtmlFunction = (nonce, imagePreloads) => {
    const parts = [injectCriticalStyle(nonce)];

    if (!ENV.isProduction) parts.push(injectDevFoucStyle(nonce));
    if (imagePreloads) parts.push(imagePreloads);

    return parts.join('\n');
};
