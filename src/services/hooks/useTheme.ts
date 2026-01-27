import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@client-store/hook';
import { switchTheme } from '@client-store/slices/globalData/globalData';
import { THEME, THEME_STORAGE_KEY, type ThemeType } from '@client-store/slices/globalData/types';

type UseThemeReturn = {
    toggleTheme: () => void;
    theme: ThemeType;
};

export const useTheme = (): UseThemeReturn => {
    const theme = useAppSelector(state => state.globalData.theme);
    const dispatch = useAppDispatch();

    const getStoredTheme = (): ThemeType | null => {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === THEME.DARK || stored === THEME.LIGHT) return stored;
        return null;
    };

    const toggleTheme = () => {
        const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
        dispatch(switchTheme(newTheme));
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    };

    useEffect(() => {
        const initTheme = document.documentElement.getAttribute('data-theme') as ThemeType;
        document.querySelector('[data-theme-init]')?.remove();
        dispatch(switchTheme(initTheme));

        const mediaQuery = window.matchMedia(`(prefers-color-scheme: ${THEME.DARK})`);

        const handleChange = (event: MediaQueryListEvent) => {
            if (getStoredTheme()) return;
            dispatch(switchTheme(event.matches ? THEME.DARK : THEME.LIGHT));
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [dispatch]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return { toggleTheme, theme };
};
