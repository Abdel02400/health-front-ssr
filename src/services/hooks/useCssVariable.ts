import { useState } from 'react';
import { parseCssDuration } from '@client-utils/string';

const cssVariableCache = new Map<string, number>();

type UseCssVariableFunction = (
    variableName: `--${string}`,
    defaultValue: number
) => number;

export const useCssVariable: UseCssVariableFunction = (variableName, defaultValue): number => {
    const [value] = useState<number>(() => {
        if (import.meta.env.SSR) return defaultValue;
        if (cssVariableCache.has(variableName)) return cssVariableCache.get(variableName) ?? defaultValue;

        const rawValue = getComputedStyle(document.documentElement)
            .getPropertyValue(variableName)
            .trim();

        const parsed = rawValue ? parseCssDuration(rawValue) : defaultValue;
        cssVariableCache.set(variableName, parsed);

        return parsed;
    });

    return value;
};