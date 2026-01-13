type ClassDictionary = Record<string, boolean | undefined | null>;
type ClassArray = ClassValue[];
type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

const toVal = (mix: ClassValue): string => {
    if (!mix) return '';
    if (typeof mix === 'string' || typeof mix === 'number') return String(mix);
    if (Array.isArray(mix)) return mix.map(toVal).filter(Boolean).join(' ');
    if (typeof mix === 'object') return Object.keys(mix).filter((key) => Boolean(mix[key])).join(' ');

    return '';
};

export const clsx = (...args: ClassArray) => args.map(toVal).filter(Boolean).join(' ');