import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { useIntersectionObserver } from '@client-hooks/useIntersectionObserver';
import { isEmpty, splitWords } from '@client-utils/string';
import { clsx } from '@client-utils/clsx';
import { useCssVariable } from '@client-hooks/useCssVariable';
import './title.scss';

type TitleProps = {
    text: string;
    isAnimated?: boolean;
};

function Title({ text, isAnimated = false }: TitleProps): ReactElement {
    const { ref, isVisible } = useIntersectionObserver<HTMLHeadingElement>();
    const animationDuration = useCssVariable('--title-animation-duration', 600);

    const words = useMemo(() => {
        if (!isAnimated || isEmpty(text)) return [];
        return splitWords(text);
    }, [text, isAnimated]);

    const animatedText = useMemo(() => {
        if (!isAnimated || isEmpty(text)) return text;

        const delayStep = Math.round(animationDuration / words.length);

        return words.map((word, index) => (
            <span
                key={`${word}-${index}`}
                className={clsx('title__word', isVisible && 'title__word--visible')}
                style={{ animationDelay: `${index * delayStep}ms` }}
            >
                {word}{' '}
            </span>
        ));
    }, [isAnimated, isVisible, text, words, animationDuration]);

    return (
        <h2 ref={ref} className={clsx('title', isVisible && 'title--visible')}>
            {animatedText}
        </h2>
    );
}

export default Title;