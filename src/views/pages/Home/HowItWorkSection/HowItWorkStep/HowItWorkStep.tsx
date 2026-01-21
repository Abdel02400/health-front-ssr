import { memo, type ReactElement } from 'react';
import './how-it-work-step.scss';

type HowItWorkStepProps = {
    illustrationSrc: string;
    illustrationAlt: string;
    stepNumber: number;
    title: string;
    description: string;
}

const HowItWorkStep = memo(function HowItWorkStep(props: HowItWorkStepProps): ReactElement {
    const { illustrationSrc, illustrationAlt, stepNumber, title, description } = props;

    return (
        <div className='how-it-work-step'>
            <img className='how-it-work-step__illustration' src={illustrationSrc} alt={illustrationAlt} />
            <div className='how-it-work-step__content'>
                <p className='how-it-work-step__content-title'>{stepNumber}. {title}</p>
                <p className='how-it-work-step__content-description'>{description}</p>
            </div>
        </div>
    );
});

export default HowItWorkStep;