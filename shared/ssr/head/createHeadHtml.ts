import { injectCriticalStyle } from '@shared-ssr/head/injectCriticalStyle';
import { injectDevFoucStyle } from '@shared-ssr/head/injectDevFoucStyle';
import { injectRouteAssets } from '@shared-ssr/head/injectRouteAssets';
import { ENV } from '@server-config/env';
import type { RouteAssetsType } from '@server-types/route';

export type CreateHeadHtmlFunction = (nonce: string, routeAssets: RouteAssetsType | null) => string;

export const createHeadHtml: CreateHeadHtmlFunction = (nonce, routeAssets) => {
    const parts = [injectCriticalStyle(nonce)];

    if (!ENV.isProduction) parts.push(injectDevFoucStyle(nonce));
    if (routeAssets) parts.push(injectRouteAssets(nonce, routeAssets));

    return parts.join('\n');
};
