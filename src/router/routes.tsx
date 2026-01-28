import type { ComponentType } from 'react';
import type { RouteObject } from 'react-router';
import { routeConfig, getPagesArray } from '@shared-router/routeConfig';
import type { RoutePathType } from '@shared-types/route';

const lazyRoute = (importFn: () => Promise<{ default: ComponentType }>) => async () => {
    const { default: Component } = await importFn();
    return { Component };
};

const pageImports: Record<RoutePathType, () => Promise<{ default: ComponentType }>> = {
    '/': () => import('@client-pages/Home/Home'),
    '/subscriptions': () => import('@client-pages/Subscriptions/Subscriptions'),
    '/contact': () => import('@client-pages/Contact/Contact')
};

export const routes: RouteObject[] = [
    {
        path: routeConfig.layout.path,
        lazy: lazyRoute(() => import('@client-app')),
        children: getPagesArray().map(page => ({
            index: page.index,
            path: page.index ? undefined : page.path.slice(1),
            lazy: lazyRoute(pageImports[page.path]),
        })),
    },
];