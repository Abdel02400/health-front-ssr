import { useEffect, useState } from 'react';
import { useCssVariable } from '@client-hooks/useCssVariable';

type ScreenSize = {
    isLargeSize: boolean;
    isMediumSize: boolean;
    isSmallSize: boolean;
    isHydrated: boolean;
};

const DEFAULT_SIZE: ScreenSize = {
    isLargeSize: false,
    isMediumSize: false,
    isSmallSize: false,
    isHydrated: false,
};

export const useScreenSize = (): ScreenSize => {
    const [size, setSize] = useState<ScreenSize>(DEFAULT_SIZE);
    const large = useCssVariable('--large-breakpoint', 1200);
    const medium = useCssVariable('--medium-breakpoint', 768);
    const small = useCssVariable('--small-breakpoint', 480);


    useEffect(() => {
        if (import.meta.env.SSR) return;

        const queries = [
            window.matchMedia(`(min-width: ${large}px)`),
            window.matchMedia(`(min-width: ${medium}px)`),
            window.matchMedia(`(max-width: ${small}px)`),
        ];

        const compute = (): ScreenSize => ({
            isLargeSize: queries[0].matches,
            isMediumSize: queries[1].matches,
            isSmallSize: queries[2].matches,
            isHydrated: true,
        });

        const update = () => setSize(compute());
        update();
        queries.forEach(q => q.addEventListener('change', update));
        return () => {
            queries.forEach(q => q.removeEventListener('change', update));
        };
    }, [large, medium, small]);

    return size;
};