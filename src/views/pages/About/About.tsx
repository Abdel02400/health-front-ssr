import type { ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import Button from '@client-components/Button/Button';
import { useScreenSize } from '@client-hooks/useScreenSize';
import './about.scss';

const values = [
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

function About(): ReactElement {
    const { isLargeSize } = useScreenSize();
    const baseDelay = isLargeSize ? 150 : 0;

    return (
        <div className='about container'>
            <div className='about__hero'>
                <Title text='Pourquoi Health existe' isAnimated />
                <AnimatedReveal delay={400}>
                    <p className='about__intro'>
                        On a tous essayé des régimes qui promettent des résultats rapides. Le problème ?
                        Ils sont compliqués, frustrants, et on finit par abandonner. Health est né d'une
                        idée simple : et si l'application s'adaptait à toi, plutôt que l'inverse ?
                    </p>
                </AnimatedReveal>
            </div>

            <div className='about__values'>
                <AnimatedReveal>
                    <h3 className='about__values-title'>Nos principes</h3>
                </AnimatedReveal>
                <div className='about__values-list'>
                    {values.map((value, index) => (
                        <AnimatedReveal key={value.title} delay={baseDelay * index}>
                            <div className='about__value'>
                                <h4 className='about__value-title'>{value.title}</h4>
                                <p className='about__value-description'>{value.description}</p>
                            </div>
                        </AnimatedReveal>
                    ))}
                </div>
            </div>

            <AnimatedReveal>
                <div className='about__cta'>
                    <p className='about__cta-text'>
                        Prêt à essayer une approche différente ?
                    </p>
                    <Button>Commencer gratuitement</Button>
                </div>
            </AnimatedReveal>
        </div>
    );
}

export default About;
