export type UseRestrictionsRefType = HTMLInputElement | HTMLTextAreaElement;
export type UseRestrictionsRefArrayType = (HTMLInputElement | HTMLTextAreaElement | null)[];
export type RestrictionOptions = {
    pattern?: string;
    mask?: string;
    maskValue?: '*' | string;
    restrictedPattern?: string;
    disablePaste?: boolean;
    disableRestrictKey?: boolean;
}