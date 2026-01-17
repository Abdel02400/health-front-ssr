import type { ComponentType } from 'react';
import type { RouteObject } from 'react-router';
import { routeConfig, type RoutePath } from '@shared-router/routeConfig';

const lazyRoute = (importFn: () => Promise<{ default: ComponentType }>) => async () => {
    const { default: Component } = await importFn();
    return { Component };
};

const pageImports: Record<RoutePath, () => Promise<{ default: ComponentType }>> = {
    '/': () => import('@client-pages/Home/Home'),
    '/features': () => import('@client-pages/Features/Features'),
    '/subscriptions': () => import('@client-pages/Subscriptions/Subscriptions'),
    '/about': () => import('@client-pages/About/About'),
    '/contact': () => import('@client-pages/Contact/Contact'),
};

export const routes: RouteObject[] = [
    {
        path: routeConfig.layout.path,
        lazy: lazyRoute(() => import('@client-app')),
        children: routeConfig.pages.map(page => ({
            index: 'index' in page,
            path: 'index' in page ? undefined : page.path.slice(1),
            lazy: lazyRoute(pageImports[page.path]),
        })),
    },
];