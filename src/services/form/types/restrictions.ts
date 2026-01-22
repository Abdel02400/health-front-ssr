export type UseRestrictionsRefType = HTMLInputElement;
export type UseRestrictionsRefArrayType = (HTMLInputElement | null)[];
export type RestrictionOptions = {
    pattern?: string;
    mask?: string;
    maskValue?: '*' | string;
    restrictedPattern?: string;
    disablePaste?: boolean;
    disableRestrictKey?: boolean;
}