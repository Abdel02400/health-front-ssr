import { routeConfig } from '@shared-router/routeConfig';
import type { RouteNameType, RoutePathParamsType } from '@shared-types/route';

export function routePath<N extends RouteNameType>(
    name: N,
    ...args: RoutePathParamsType<N>
): string {
    const page = routeConfig.pages[name];
    if (!page) throw new Error(`Route not found: ${name}`);

    const params = args[0] as Record<string, string> | undefined;
    if (!params) return page.path;

    return Object.entries(params).reduce(
        (path, [key, value]) => path.replace(`:${key}`, value),
        page.path as string
    );
}
