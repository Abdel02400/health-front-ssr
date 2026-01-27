import type { PropsWithChildren, ReactElement } from 'react';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import './title.scss';

type TitleProps = PropsWithChildren<{
    eyebrow?: ReactElement;
}>;

function Title({ eyebrow, children }: TitleProps): ReactElement {
    return (
        <AnimatedReveal>
            <h2 className='title'>
                {eyebrow && (<p className='title__eyebrow'>{eyebrow}</p>)}
                {children}
            </h2>
        </AnimatedReveal>
    );
}

export default Title;