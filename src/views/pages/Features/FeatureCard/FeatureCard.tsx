import type { ReactElement, ReactNode } from 'react';
import './feature-card.scss';

type FeatureCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps): ReactElement {
    return (
        <div className='feature-card'>
            <div className='feature-card__icon'>
                {icon}
            </div>
            <div className='feature-card__content'>
                <h3 className='feature-card__title'>{title}</h3>
                <p className='feature-card__description'>{description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;
