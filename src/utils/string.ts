export const isEmpty = (val: unknown): boolean => {
    if (val === undefined || val === null || val === '') return true;
    if (typeof val === 'string' || Array.isArray(val)) return val.length === 0;
    return false;
};

export const splitWords = (text: string): string[] => {
    return text.trim().split(/\s+/);
};

export const parseCssDuration = (value: string): number => {
    if (value.endsWith('ms')) return parseFloat(value);
    if (value.endsWith('s')) return parseFloat(value) * 1000;
    return parseFloat(value);
};