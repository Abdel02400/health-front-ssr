import type { routeConfig } from '@shared-router/routeConfig';

type LayoutEntryType = {
    path: '/';
    entry: string;
};

export type PageEntryType = {
    [name: string]: {
        path: string;
        entry: string;
        index?: boolean;
    }
};

export type RouteConfigType = {
    layout: LayoutEntryType;
    pages: PageEntryType;
}

type ExtractParamsType<T extends string> =
    T extends `${string}:${infer Param}/${infer Rest}`
        ? Param | ExtractParamsType<`/${Rest}`>
        : T extends `${string}:${infer Param}`
            ? Param
            : never;

export type RouteNameType = keyof typeof routeConfig.pages;
export type PagesType = typeof routeConfig.pages;
export type RoutePathType = typeof routeConfig.pages[RouteNameType]['path'];
export type RoutePathParamsType<N extends RouteNameType> =
    ExtractParamsType<PagesType[N]['path']> extends never
        ? []
        : [params: Record<ExtractParamsType<PagesType[N]['path']>, string>];