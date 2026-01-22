export const ALPHANUMERIC_32 = {
    pattern: '^[a-zA-Z0-9_-]{0,32}$',
    restrictedPattern: '[^a-zA-Z0-9_-]',
};

export const EMAIL_180 = {
    pattern: '^[^\\s]{0,180}$',
    restrictedPattern: '\\s',
};