export type RouteEntryType<TPath extends string = string> = {
    path: TPath;
    entry: string;
    index?: boolean;
}

export type RouteConfigType<TPaths extends string = string> = {
    layout: RouteEntryType<'/'>;
    pages: readonly RouteEntryType<TPaths>[];
}