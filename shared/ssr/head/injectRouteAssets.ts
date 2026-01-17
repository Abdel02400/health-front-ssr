import type { RouteAssetsType } from '@server-types/routes';

export const injectRouteAssets = (nonce: string, routeAssets: RouteAssetsType): string => {
    const { js, css } = routeAssets;
    const parts: string[] = [];

    for (const href of css) parts.push(`<link rel="stylesheet" href="${href}" nonce="${nonce}" />`);
    for (const href of js) parts.push(`<link rel="modulepreload" href="${href}" nonce="${nonce}" />`);

    return parts.join('\n');
};