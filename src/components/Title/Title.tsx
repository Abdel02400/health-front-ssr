import type { ReactElement } from 'react';
import { useIntersectionObserver } from '@client-hooks/useIntersectionObserver';
import { isEmpty, splitWords } from '@client-utils/string';
import './title.scss';
import { clsx } from '@client-utils/clsx';

type TitleProps = {
    text: string;
    isAnimated?: boolean;
};

function Title({ text, isAnimated = false }: TitleProps): ReactElement {
    const { ref, isVisible } = useIntersectionObserver<HTMLHeadingElement>();

    const renderAnimatedText = (animatedText: string): string | ReactElement[] => {
        if (!isAnimated || isEmpty(animatedText)) return animatedText;

        return splitWords(animatedText).map((word, index) => (
            <span
                key={index}
                className={clsx('title__word', isVisible && 'title__word--visible')}
                style={{ animationDelay: `${index * 100}ms` }}
            >
                {word}{' '}
            </span>
        ));
    };

    return (
        <h2 ref={ref} className='title'>{renderAnimatedText(text)}</h2>
    );
}

export default Title;