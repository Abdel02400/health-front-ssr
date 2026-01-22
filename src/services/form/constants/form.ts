export const VALIDATION_MODE = 'onChange';
export const RE_VALIDATE_MODE = 'onChange';

const rootStyle = import.meta.env.SSR ? null : getComputedStyle(document.documentElement);
export const FIELD_VALID_CLASS = rootStyle?.getPropertyValue('--field-valid').trim();
export const FIELD_ERROR_CLASS = rootStyle?.getPropertyValue('--field-error').trim();