import type { ReactElement } from 'react';
import Button from '@client-components/Button/Button';
import ValidIcon from '@client-components/icons/ValidIcon';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import { clsx } from '@client-utils/clsx';
import './subscription-card.scss';

type SubscriptionCardProps = {
    title: string;
    price: number;
    comment: string;
    canDo: string[];
    btnText: string;
    btnAction: () => void;
    information?: string;
    isFree?: boolean;
}

function SubscriptionCard(props: SubscriptionCardProps): ReactElement {
    const {
        title,
        price,
        comment,
        canDo,
        btnText,
        btnAction,
        information = undefined,
        isFree = false
    } = props;

    return (
        <AnimatedReveal>
            <div className={clsx('subscription-card', isFree && 'subscription-card--free')}>
                <div className='subscription-card__header'>
                    <h3 className='subscription-card__header-title'>{title}</h3>
                    {information && <span className='subscription-card__header-information'>{information}</span>}
                </div>
                <p className='subscription-card__price'>{price}&euro;</p>
                <p className='subscription-card__comment'>{comment}</p>
                <ul className='subscription-card__items'>
                    {canDo.map((item, index) => (
                        <li key={`${item}-${index}`} className='subscription-card__item'>
                            <ValidIcon />
                            {item}
                        </li>
                    ))}
                </ul>
                <Button onClick={btnAction}>{btnText}</Button>
            </div>
        </AnimatedReveal>
    );
}

export default SubscriptionCard;