import type { ReactElement, ReactNode } from 'react';
import { useScreenSize } from '@client-hooks/useScreenSize';
import Title from '@client-components/Title/Title';
import FireIcon from '@client-components/icons/FireIcon';
import TargetIcon from '@client-components/icons/TargetIcon';
import SyncIcon from '@client-components/icons/SyncIcon';
import RestaurantIcon from '@client-components/icons/RestaurantIcon';
import FitnessIcon from '@client-components/icons/FitnessIcon';
import HeartIcon from '@client-components/icons/HeartIcon';
import TouchIcon from '@client-components/icons/TouchIcon';
import FeatureCard from './FeatureCard/FeatureCard';
import './features-section.scss';

type FeatureType = {
    icon: ReactNode;
    title: string;
    description: string;
};

const FEATURES = [
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
] as const satisfies readonly FeatureType[];

function FeaturesSection(): ReactElement {
    const { isLargeSize, isMediumSize } = useScreenSize();
    const columns = isLargeSize ? 3 : isMediumSize ? 2 : 1;
    const baseDelay = columns > 1 ? 200 : 0;

    return (
        <div className='features-section container'>
            <Title eyebrow={<><FireIcon /> Avantages</>}>
                Tout ce dont tu as besoin pour réussir
            </Title>
            <div className='features-section__list'>
                {FEATURES.map((feature, index) => (
                    <FeatureCard
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        delay={baseDelay * (index % columns)}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturesSection;
