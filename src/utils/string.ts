export function isEmpty(val: unknown): boolean {
    if (val === undefined || val === null || val === '') return true;
    if (typeof val === 'string' || Array.isArray(val)) return val.length === 0;
    return false;
}

export function splitWords(text: string): string[] {
    return text.trim().split(/\s+/);
}