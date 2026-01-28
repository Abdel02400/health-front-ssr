import type { ReactElement } from 'react';
import { useScreenSize } from '@client-hooks/useScreenSize';
import Title from '@client-components/Title/Title';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import Button from '@client-components/Button/Button';
import HeartIcon from '@client-components/icons/HeartIcon';
import ValueCard from './ValueCard/ValueCard';
import './about-section.scss';

type ValueType = {
    title: string;
    description: string;
};

const VALUES: ValueType[] = [
    {
        title: 'Simplicité',
        description: "Pas de comptage de calories, pas de journaux alimentaires interminables. Une seule question par jour suffit.",
    },
    {
        title: 'Adaptation',
        description: "Ton plan évolue avec toi. Chaque semaine, on ajuste selon tes résultats réels.",
    },
    {
        title: 'Accessibilité',
        description: "Des repas avec des ingrédients simples, des exercices sans équipement. Tout le monde peut suivre.",
    },
    {
        title: 'Bienveillance',
        description: "Pas de culpabilité, pas de pression. Tu avances à ton rythme, sans jugement.",
    },
];

function AboutSection(): ReactElement {
    const { isMediumSize } = useScreenSize();
    const columns = isMediumSize ? 2 : 1;
    const baseDelay = columns > 1 ? 200 : 0;

    return (
        <div className='about-section container'>
            <div className='about-section__header'>
                <Title eyebrow={<><HeartIcon /> À propos</>}>
                    Pourquoi Health existe
                </Title>
                <AnimatedReveal delay={200}>
                    <p className='about-section__intro'>
                        On a tous essayé des régimes qui promettent des résultats rapides. Le problème ?
                        Ils sont compliqués, frustrants, et on finit par abandonner. Health est né d'une
                        idée simple : et si l'application s'adaptait à toi, plutôt que l'inverse ?
                    </p>
                </AnimatedReveal>
            </div>
            <div className='about-section__list'>
                {VALUES.map((value, index) => (
                    <ValueCard
                        key={value.title}
                        title={value.title}
                        description={value.description}
                        delay={baseDelay * (index % columns)}
                    />
                ))}
            </div>
            <AnimatedReveal>
                <div className='about-section__action'>
                    <p className='about-section__action-text'>
                        Prêt à essayer une approche différente ?
                    </p>
                    <Button>Nous rejoindre</Button>
                </div>
            </AnimatedReveal>
        </div>
    );
}

export default AboutSection;
