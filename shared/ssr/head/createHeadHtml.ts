import { createCriticalStyles } from '@shared-ssr/head/createSSRStyles';

export type CreateHeadHtmlFunction = (nonce: string, imagePreloads?: string, devStyles?: string) => string;

export const createHeadHtml: CreateHeadHtmlFunction = (nonce, imagePreloads, devStyles) => {
    const parts = [createCriticalStyles(nonce)];

    if (imagePreloads) parts.push(imagePreloads);
    if (devStyles) parts.push(devStyles);

    return parts.join('\n');
};
