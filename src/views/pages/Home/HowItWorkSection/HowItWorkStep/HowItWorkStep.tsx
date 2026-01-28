import { memo, type ReactElement } from 'react';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import ValidIcon from '@client-components/icons/ValidIcon';
import { clsx } from '@client-utils/clsx';
import './how-it-work-step.scss';

type HowItWorkStepProps = {
    step: number;
    icon: ReactElement;
    title: string;
    description: string;
    isCompleted: boolean;
    onVisible: () => void;
}

const HowItWorkStep = memo(function HowItWorkStep(props: HowItWorkStepProps): ReactElement {
    const { step, icon, title, description, isCompleted, onVisible } = props;

    return (
        <div className='how-it-work-step'>
            <AnimatedReveal className='how-it-work-step__card' onVisible={onVisible}>
                {icon}
                <p className='how-it-work-step__title'>{title}</p>
                <p className='how-it-work-step__description'>{description}</p>
            </AnimatedReveal>
            <div className='how-it-work-step__timeline'>
                <span className={clsx('how-it-work-step__indicator', isCompleted && 'how-it-work-step__indicator--completed')}>
                    {isCompleted ? <ValidIcon /> : step}
                </span>
            </div>
        </div>
    );
});

export default HowItWorkStep;