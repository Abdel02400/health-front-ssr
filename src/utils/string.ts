export const splitWords = (text: string): string[] => {
    return text.trim().split(/\s+/);
};

export const splitLetters = (text: string): string[] => {
    return text.split('');
};

export const parseCssDuration = (value: string): number => {
    if (value.endsWith('ms')) return parseFloat(value);
    if (value.endsWith('s')) return parseFloat(value) * 1000;
    return parseFloat(value);
};

export const convertNameToId = (name: string): string => name.replace(/\./g, '_');