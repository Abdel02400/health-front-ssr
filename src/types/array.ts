export type RangeInclusive<N extends number, Acc extends number[] = []> =
    Acc['length'] extends N
        ? Acc[number] | N
        : RangeInclusive<N, [...Acc, Acc['length']]>;
