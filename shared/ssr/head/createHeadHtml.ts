import { createCriticalStyles } from '@shared-ssr/head/createSSRStyles';

export const createHeadHtml = (nonce: string) => {
    return [createCriticalStyles(nonce)].join('\n');
};
