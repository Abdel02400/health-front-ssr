import type { ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import FeatureCard from './FeatureCard/FeatureCard';
import TargetIcon from '@client-components/icons/TargetIcon';
import SyncIcon from '@client-components/icons/SyncIcon';
import RestaurantIcon from '@client-components/icons/RestaurantIcon';
import FitnessIcon from '@client-components/icons/FitnessIcon';
import HeartIcon from '@client-components/icons/HeartIcon';
import TouchIcon from '@client-components/icons/TouchIcon';
import { useScreenSize } from '@client-hooks/useScreenSize';
import './features.scss';

const features = [
    {
        icon: <TargetIcon />,
        title: 'Plan personnalisé',
        description: "Un programme adapté à ton objectif, ton mode de vie et tes préférences alimentaires. Pas de régime générique.",
    },
    {
        icon: <TouchIcon />,
        title: 'Suivi en 1 clic',
        description: "Chaque jour, une seule question : as-tu suivi le plan ? Oui ou Non. Pas de calories à compter.",
    },
    {
        icon: <SyncIcon />,
        title: 'Adaptation automatique',
        description: "Ton plan s'ajuste chaque semaine selon tes résultats. Pas de progrès ? On change. Trop dur ? On simplifie.",
    },
    {
        icon: <RestaurantIcon />,
        title: 'Repas accessibles',
        description: "Des menus simples avec des ingrédients que tu trouves partout. Adapté à ton budget et tes goûts.",
    },
    {
        icon: <FitnessIcon />,
        title: 'Activités adaptées',
        description: "Des exercices progressifs qui correspondent à ton niveau. Pas besoin de salle de sport.",
    },
    {
        icon: <HeartIcon />,
        title: 'Sans culpabilité',
        description: "Pas de jugement, pas de pression. Tu avances à ton rythme, on t'accompagne.",
    },
];

function Features(): ReactElement {
    const { isLargeSize } = useScreenSize();
    const baseDelay = isLargeSize ? 200 : 0;

    return (
        <div className='features container'>
            <div className='features__header'>
                <Title text='Ce que tu obtiens avec Health' isAnimated />
                <AnimatedReveal delay={400}>
                    <p className='features__description'>
                        Une application simple qui fait le travail pour toi. Tu suis, elle s'adapte.
                    </p>
                </AnimatedReveal>
            </div>
            <div className='features__list'>
                {features.map((feature, index) => (
                    <AnimatedReveal key={feature.title} delay={baseDelay * index}>
                        <FeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    </AnimatedReveal>
                ))}
            </div>
        </div>
    );
}

export default Features;
