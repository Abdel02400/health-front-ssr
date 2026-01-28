import { memo, type ReactElement } from 'react';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import './value-card.scss';

type ValueCardProps = {
    title: string;
    description: string;
    delay?: number;
};

const ValueCard = memo(function ValueCard({ title, description, delay }: ValueCardProps): ReactElement {
    return (
        <AnimatedReveal delay={delay}>
            <div className='value-card'>
                <h4 className='value-card__title'>{title}</h4>
                <p className='value-card__description'>{description}</p>
            </div>
        </AnimatedReveal>
    );
});

export default ValueCard;
