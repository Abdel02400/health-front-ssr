export const toNumber = (value: string | undefined, fallback: number) => {
    if (typeof value !== 'string') return fallback;

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
};