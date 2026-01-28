import { memo, type ReactElement, type ReactNode } from 'react';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import './feature-card.scss';

type FeatureCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
    delay?: number;
};

const FeatureCard = memo(function FeatureCard({ icon, title, description, delay }: FeatureCardProps): ReactElement {
    return (
        <AnimatedReveal delay={delay}>
            <div className='feature-card'>
                <div className='feature-card__icon'>
                    {icon}
                </div>
                <h3 className='feature-card__title'>{title}</h3>
                <p className='feature-card__description'>{description}</p>
            </div>
        </AnimatedReveal>
    );
});

export default FeatureCard;
