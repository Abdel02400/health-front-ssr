import { matchPath } from 'react-router';
import type { RouteConfigType } from '@shared-types/route';

export const routeConfig = {
    layout: {
        path: '/',
        entry: 'src/App.tsx',
    },
    pages: {
        home: { path: '/', entry: 'src/views/pages/Home/Home.tsx', index: true },
        subscriptions: { path: '/subscriptions', entry: 'src/views/pages/Subscriptions/Subscriptions.tsx' },
        contact: { path: '/contact', entry: 'src/views/pages/Contact/Contact.tsx' },
    },
} as const satisfies RouteConfigType;

export const getPagesArray = () => {
    return Object.entries(routeConfig.pages).map(([name, page]) => ({ index: false, ...page, name }));
};

export const getEntriesForPath = (pathname: string): string[] => {
    const entries: string[] = [routeConfig.layout.entry];
    const pages = getPagesArray();
    const page = pages.find(p => p.index ? pathname === '/' : matchPath(p.path, pathname));

    if (page) entries.push(page.entry);

    return entries;
};

