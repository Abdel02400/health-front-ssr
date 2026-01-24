import type { ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
import './subscriptions.scss';

function Subscriptions(): ReactElement {
    return (
        <div className='subscriptions container'>
            <div className='subscriptions__header'>
                <Title text='Choisis ton plan' isAnimated />
                <AnimatedReveal delay={400}>
                    <p className='subscriptions__description'>
                        Commence gratuitement, passe à la version complète quand tu es prêt.
                    </p>
                </AnimatedReveal>
            </div>
            <div className='subscriptions__cards'>
                <SubscriptionCard
                    title='Découverte'
                    price={0}
                    comment='Pour tester sans engagement'
                    canDo={[
                        'Plan personnalisé de base',
                        'Suivi quotidien',
                        'Accès limité aux recettes',
                        '1 ajustement par mois',
                    ]}
                    btnText='Commencer gratuitement'
                    btnAction={() => {}}
                    isFree
                />
                <SubscriptionCard
                    title='Essentiel'
                    information='Populaire'
                    price={9}
                    comment='Pour des résultats durables'
                    canDo={[
                        'Plan 100% personnalisé',
                        'Ajustements hebdomadaires',
                        'Toutes les recettes',
                        'Programmes sportifs adaptés',
                        'Support par email',
                    ]}
                    btnText='Essayer 1 mois gratuit'
                    btnAction={() => {}}
                />
                <SubscriptionCard
                    title='Annuel'
                    information='-30%'
                    price={75}
                    comment='Le meilleur rapport qualité-prix'
                    canDo={[
                        'Tout le plan Essentiel',
                        '2 mois offerts',
                        'Accès prioritaire aux nouveautés',
                        'Support prioritaire',
                    ]}
                    btnText='Économiser 33€'
                    btnAction={() => {}}
                />
            </div>
        </div>
    );
}

export default Subscriptions;
