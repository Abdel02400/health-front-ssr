export const THEME = {
    DARK: 'dark',
    LIGHT: 'light',
} as const;

export const THEME_STORAGE_KEY = 'theme';

export type ThemeType = (typeof THEME)[keyof typeof THEME];
