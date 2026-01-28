import { useEffect, type ReactElement, type PropsWithChildren } from 'react';
import { useIntersectionObserver } from '@client-hooks/useIntersectionObserver';
import { clsx } from '@client-utils/clsx';
import './animated-reveal.scss';

type AnimatedRevealProps = PropsWithChildren<{
    delay?: number;
    className?: string;
    rootMargin?: string;
    onVisible?: () => void;
}>;

function AnimatedReveal(props: AnimatedRevealProps): ReactElement {
    const { 
        children,
        delay = 0,
        className = undefined,
        rootMargin = '-100px',
        onVisible = undefined
    } = props;

    const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ rootMargin });

    useEffect(() => {
        if (isVisible && onVisible) onVisible();
    }, [isVisible, onVisible]);

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
