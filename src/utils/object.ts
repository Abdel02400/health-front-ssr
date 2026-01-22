export const getDeepValue = (path: string, obj: Record<string, unknown>): unknown => {
    if (!path || !obj || typeof obj !== 'object') return undefined;

    return path
        .split('.')
        .reduce<unknown>((current, key) => {
            if (typeof current === 'object' &&
                current !== null &&
                key in current
            ) return (current as Record<string, unknown>)[key];
            return undefined;
        }, obj);
};