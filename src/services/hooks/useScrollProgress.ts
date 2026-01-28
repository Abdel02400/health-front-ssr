import { useState, useEffect, useEffectEvent, type RefObject } from 'react';
import type { RangeInclusive } from '@client-types/array';

type ScrollProgress = RangeInclusive<100>;

const clampProgress = (value: number): ScrollProgress =>
    Math.round(Math.min(100, Math.max(0, value))) as ScrollProgress;

type UseScrollProgressOptions = {
    startOffset?: number;
    irreversible?: boolean;
};

export function useScrollProgress(
    ref: RefObject<HTMLElement | null>,
    options: UseScrollProgressOptions = {}
): ScrollProgress {
    const { startOffset = 0.9, irreversible = true } = options;
    const [progress, setProgress] = useState<ScrollProgress>(0);

    const onScroll = useEffectEvent(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        const offset = windowHeight * startOffset;

        const newProgress = clampProgress(((offset - elementTop) / elementHeight) * 100);

        if (irreversible) setProgress((prev) => clampProgress(Math.max(prev, newProgress)));
        else setProgress(newProgress);
    });

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return progress;
}
