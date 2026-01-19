import { useEffect, useState, type ReactElement } from 'react';
import { useIntersectionObserver } from '@client-hooks/useIntersectionObserver';

type CounterAnimationProps = {
  target: number;
  duration?: number;
};

function CounterAnimation({ target, duration = 2000 }: CounterAnimationProps): ReactElement {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useIntersectionObserver<HTMLSpanElement>();

    useEffect(() => {
        if (!isVisible) return;

        const start = performance.now();
        let animationId: number;

        const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 2;

            setCount(Math.floor(eased * target));
            if (progress < 1) animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isVisible, target, duration]);

    return <span ref={ref} className='counter-animation'>{count}</span>;
}

export default CounterAnimation;
