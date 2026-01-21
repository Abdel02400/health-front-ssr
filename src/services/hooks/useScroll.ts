import { useCallback } from 'react';

type ScrollBehavior = 'smooth' | 'instant';

type UseScrollReturn = {
    scrollToTop: (behavior?: ScrollBehavior) => void;
};

export const useScroll = (): UseScrollReturn => {
    const _scrollTo = (top: number, behavior: ScrollBehavior = 'instant') => {
        window.scrollTo({
            top,
            behavior,
        });
    };

    const scrollToTop = useCallback((behavior: ScrollBehavior = 'instant') => {
        _scrollTo(0, behavior);
    }, []);

    return { scrollToTop };
};