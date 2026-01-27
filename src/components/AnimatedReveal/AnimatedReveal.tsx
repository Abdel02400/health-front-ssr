import type { ReactElement, PropsWithChildren } from 'react';
import { useIntersectionObserver } from '@client-hooks/useIntersectionObserver';
import { clsx } from '@client-utils/clsx';
import './animated-reveal.scss';

type AnimatedRevealProps = PropsWithChildren<{
    delay?: number;
    className?: string;
    rootMargin?: string;
}>;

function AnimatedReveal({ children, delay = 0, className, rootMargin = '-100px' }: AnimatedRevealProps): ReactElement {
    const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ rootMargin });

    return (
        <div
            ref={ref}
            className={clsx('animated-reveal', isVisible && 'animated-reveal--visible', className)}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default AnimatedReveal;
