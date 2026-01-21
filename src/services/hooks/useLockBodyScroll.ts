import { useLayoutEffect } from 'react';

type UseLockBodyScrollFunction = () => void;

export const useLockBodyScroll: UseLockBodyScrollFunction = () => {
    useLayoutEffect(() => {
        if (import.meta.env.SSR) return;

        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);
};