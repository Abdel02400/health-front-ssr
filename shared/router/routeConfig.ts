import type { RouteConfigType } from '@shared-types/routes';

export const routeConfig = {
    layout: {
        path: '/',
        entry: 'src/App.tsx',
    },
    pages: [
        { path: '/', entry: 'src/views/pages/Home/Home.tsx', index: true },
        { path: '/features', entry: 'src/views/pages/Features/Features.tsx' },
        { path: '/subscriptions', entry: 'src/views/pages/Subscriptions/Subscriptions.tsx' },
        { path: '/about', entry: 'src/views/pages/About/About.tsx' },
        { path: '/contact', entry: 'src/views/pages/Contact/Contact.tsx' },
    ],
} as const satisfies RouteConfigType;

export type RoutePath = typeof routeConfig.pages[number]['path'];

export function getEntriesForPath(path: string): string[] {
    const entries: string[] = [routeConfig.layout.entry];
    const page = routeConfig.pages.find(p => 'index' in p ? path === '/' : path === p.path);

    if (page) entries.push(page.entry);

    return entries;
}
