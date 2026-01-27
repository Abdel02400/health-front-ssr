import { Fragment, type ReactElement } from 'react';
import { isEmpty } from '@client-utils/value';
import { splitWords, splitLetters } from '@client-utils/string';
import './animated-title.scss';

type AnimatedTitleProps = {
    text: string;
    totalDuration?: number;
};

function AnimatedTitle({ text, totalDuration = 1000 }: AnimatedTitleProps): ReactElement {
    const animatedText = (): ReactElement[] | string => {
        if (isEmpty(text)) return text;

        const words = splitWords(text);
        const totalLetters = words.reduce((sum, word) => sum + word.length, 0);
        const delayStep = totalLetters > 1 ? Math.round(totalDuration / (totalLetters - 1)) : 0;
        const offsets = words.map((_, i) => words.slice(0, i).reduce((sum, w) => sum + w.length, 0));

        return words.map((word, wordIndex) => (
            <Fragment key={wordIndex}>
                <span className='animated-title__word'>
                    {splitLetters(word).map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className='animated-title__letter'
                            style={{ animationDelay: `${(offsets[wordIndex] + charIndex) * delayStep}ms` }}
                        >
                            {char}
                        </span>
                    ))}
                </span>{' '}
            </Fragment>
        ));
    };

    return <h1 className='animated-title'>{animatedText()}</h1>;
}

export default AnimatedTitle;