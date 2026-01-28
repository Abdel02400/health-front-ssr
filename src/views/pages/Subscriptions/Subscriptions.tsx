import type { ReactElement } from 'react';
import { useScreenSize } from '@client-hooks/useScreenSize';
import Title from '@client-components/Title/Title';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import SubscriptionsIcon from '@client-components/icons/SubscriptionsIcon';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
import './subscriptions.scss';

type SubscriptionType = {
    title: string;
    price: number;
    comment: string;
    features: string[];
    btnText: string;
    information?: string;
    isFree?: boolean;
};

const SUBSCRIPTIONS: SubscriptionType[] = [
    {
        title: 'Découverte',
        price: 0,
        comment: 'Pour tester sans engagement',
        features: [
            'Plan personnalisé de base',
            'Suivi quotidien',
            'Accès limité aux recettes',
            '1 ajustement par mois',
        ],
        btnText: 'Commencer gratuitement',
        isFree: true,
    },
    {
        title: 'Essentiel',
        information: 'Populaire',
        price: 9,
        comment: 'Pour des résultats durables',
        features: [
            'Plan 100% personnalisé',
            'Ajustements hebdomadaires',
            'Toutes les recettes',
            'Programmes sportifs adaptés',
            'Support par email',
        ],
        btnText: 'Essayer 1 mois gratuit',
    },
    {
        title: 'Annuel',
        information: '-30%',
        price: 75,
        comment: 'Le meilleur rapport qualité-prix',
        features: [
            'Tout le plan Essentiel',
            '2 mois offerts',
            'Accès prioritaire aux nouveautés',
            'Support prioritaire',
        ],
        btnText: 'Économiser 33€',
    },
];

function Subscriptions(): ReactElement {
    const { isLargeSize, isMediumSize } = useScreenSize();
    const columns = isLargeSize ? 3 : isMediumSize ? 2 : 1;
    const baseDelay = columns > 1 ? 200 : 0;

    return (
        <div className='subscriptions container'>
            <div className='subscriptions__header'>
                <Title eyebrow={<><SubscriptionsIcon /> Abonnements</>}>
                    Choisis ton plan
                </Title>
                <AnimatedReveal delay={200}>
                    <p className='subscriptions__description'>
                        Commence gratuitement, passe à la version complète quand tu es prêt.
                    </p>
                </AnimatedReveal>
            </div>
            <div className='subscriptions__cards'>
                {SUBSCRIPTIONS.map((subscription, index) => (
                    <SubscriptionCard
                        key={subscription.title}
                        title={subscription.title}
                        price={subscription.price}
                        comment={subscription.comment}
                        features={subscription.features}
                        btnText={subscription.btnText}
                        information={subscription.information}
                        isFree={subscription.isFree}
                        delay={baseDelay * (index % columns)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Subscriptions;
