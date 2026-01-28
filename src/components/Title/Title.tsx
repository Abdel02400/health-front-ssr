import type { PropsWithChildren, ReactElement } from 'react';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import { useCssVariable } from '@client-hooks/useCssVariable';
import './title.scss';

type TitleProps = PropsWithChildren<{
    eyebrow?: ReactElement;
}>;

function Title({ eyebrow, children }: TitleProps): ReactElement {
    const transitionDuration = useCssVariable('--default-transition-duration', 500);

    return (
        <h2 className='title'>
            {eyebrow && (
                <AnimatedReveal delay={transitionDuration} className='title__eyebrow'>
                    {eyebrow}
                </AnimatedReveal>
            )}
            <AnimatedReveal>
                {children}
            </AnimatedReveal>
        </h2>
    );
}

export default Title;