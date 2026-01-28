import { memo, type ReactElement } from 'react';
import Button from '@client-components/Button/Button';
import ValidIcon from '@client-components/icons/ValidIcon';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import { clsx } from '@client-utils/clsx';
import './subscription-card.scss';

type SubscriptionCardProps = {
    title: string;
    price: number;
    comment: string;
    features: readonly string[];
    btnText: string;
    information?: string;
    isFree?: boolean;
    delay?: number;
};

const SubscriptionCard = memo(function SubscriptionCard({
    title,
    price,
    comment,
    features,
    btnText,
    information,
    isFree = false,
    delay,
}: SubscriptionCardProps): ReactElement {
    return (
        <AnimatedReveal delay={delay}>
            <div className={clsx('subscription-card', isFree && 'subscription-card--free')}>
                <div className='subscription-card__header'>
                    <h3 className='subscription-card__header-title'>{title}</h3>
                    {information && <span className='subscription-card__header-information'>{information}</span>}
                </div>
                <p className='subscription-card__price'>{price}&euro;</p>
                <p className='subscription-card__comment'>{comment}</p>
                <ul className='subscription-card__features'>
                    {features.map((feature) => (
                        <li key={feature} className='subscription-card__feature'>
                            <ValidIcon />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Button>{btnText}</Button>
            </div>
        </AnimatedReveal>
    );
});

export default SubscriptionCard;
