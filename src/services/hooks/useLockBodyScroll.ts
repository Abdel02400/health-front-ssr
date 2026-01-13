import { useLayoutEffect } from 'react';

type UseLockBodyScrollFunction = () => void;

export const useLockBodyScroll: UseLockBodyScrollFunction = () => {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = originalStyle; };
    }, []);
};