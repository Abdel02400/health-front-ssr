export const getEventKey = (event: KeyboardEvent | InputEvent): string => {
    if (event instanceof KeyboardEvent) return event.key;
    return event.data ?? '';
};

export const getNextValue = (
    currentValue: string,
    inserted: string,
    start: number | null,
    end: number | null
): string => {
    if (start === null || end === null) return currentValue + inserted;
    return currentValue.slice(0, start) + inserted + currentValue.slice(end);
};