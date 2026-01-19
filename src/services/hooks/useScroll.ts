import { useCallback } from 'react';

type ScrollBehavior = 'smooth' | 'instant';

type UseScrollReturn = {
    scrollToTop: (behavior?: ScrollBehavior) => void;
};

export const useScroll = (): UseScrollReturn => {
    const _scrollTo = (top: number, behavior: ScrollBehavior = 'smooth') => {
        window.scrollTo({
            top,
            behavior,
        });
    };

    const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
        _scrollTo(0, behavior);
    }, []);

    return { scrollToTop };
};