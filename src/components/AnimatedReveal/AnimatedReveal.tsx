import { useState, useEffect, memo, type ReactElement, type PropsWithChildren } from 'react';
import { useIntersectionObserver } from '@client-hooks/useIntersectionObserver';
import { useCssVariable } from '@client-hooks/useCssVariable';
import { clsx } from '@client-utils/clsx';
import './animated-reveal.scss';

type AnimatedRevealProps = PropsWithChildren<{
    delay?: number;
    className?: string;
}>;

const AnimatedReveal = memo(function AnimatedReveal({ children, delay = 0, className }: AnimatedRevealProps): ReactElement {
    const [isReady, setIsReady] = useState<boolean>(false);
    const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
    const duration = useCssVariable('--animated-reveal-duration', 600);

    useEffect(() => {
        if (!isVisible) return;
        const timeout = setTimeout(() => setIsReady(true), delay);
        return () => clearTimeout(timeout);
    }, [isVisible, delay]);

    return (
        <div
            ref={ref}
            className={clsx('animated-reveal', isReady && 'animated-reveal--visible', className)}
            style={{ transitionDuration: `${duration}ms` }}
        >
            {children}
        </div>
    );
});

export default AnimatedReveal;
