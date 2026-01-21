import type { ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
import './subscriptions.scss';

function Subscriptions(): ReactElement {
    return (
        <div className='subscriptions container'>
            <Title text='Nos Abonnements' />
            <div className='subscriptions__cards'>
                <SubscriptionCard
                    title='Gratuit'
                    information='Gratuit'
                    price={0}
                    comment='Testez la plateforme gratuitement'
                    canDo={[
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                    ]}
                    btnText='Essayer gratuitement'
                    btnAction={() => console.info('ok')}
                    isFree
                />
                <SubscriptionCard
                    title='Gratuit'
                    information='Gratuit'
                    price={0}
                    comment='Testez la plateforme gratuitement'
                    canDo={[
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                    ]}
                    btnText='Essayer gratuitement'
                    btnAction={() => console.info('ok')}
                />
                <SubscriptionCard
                    title='Gratuit'
                    information='Gratuit'
                    price={0}
                    comment='Testez la plateforme gratuitement'
                    canDo={[
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                        'Accès aux fonctionnalités de base',
                    ]}
                    btnText='Essayer gratuitement'
                    btnAction={() => console.info('ok')}
                />
            </div>
        </div>
    );
}

export default Subscriptions;