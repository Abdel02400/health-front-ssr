import Title from '@client-components/Title/Title';
import type { ReactElement } from 'react';
import HowItWorkStep from './HowItWorkStep/HowItWorkStep';
import goal from '@client-assets/images/goal.png';
import custom from '@client-assets/images/custom.png';
import analyse from '@client-assets/images/analyse.png';
import './how-it-work-section.scss';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import { useScreenSize } from '@client-hooks/useScreenSize';

function HowItWorkSection(): ReactElement {
    const { isLargeSize } = useScreenSize();
    const baseDelay = isLargeSize ? 300 : 0;

    return (
        <div className='how-it-work-section container'>
            <Title text='4 étapes simples pour atteindre ton objectif'></Title>
            <div className='how-it-work-section__steps'>
                <AnimatedReveal>
                    <HowItWorkStep
                        illustrationSrc={goal}
                        illustrationAlt='Illustration representant les objectifs'
                        stepNumber={1}
                        title='Crée ton profil'
                        description="Objectif, poids actuel et cible, préférences alimentaires, niveau de motivation. 30 secondes, c'est tout."
                    />
                </AnimatedReveal>
                <AnimatedReveal delay={baseDelay}>
                    <HowItWorkStep
                        illustrationSrc={custom}
                        illustrationAlt='Illustration representant la réception du plan'
                        stepNumber={2}
                        title='Reçois ton plan'
                        description='Meal plans adaptés à ton budget et préférences, activités physiques simples et accessibles.'
                    />
                </AnimatedReveal>
                <AnimatedReveal delay={baseDelay * 2}>
                    <HowItWorkStep
                        illustrationSrc={analyse}
                        illustrationAlt='Illustration representant le log quotidien'
                        stepNumber={3}
                        title='Log en 1 clic'
                        description='Chaque jour : "As-tu suivi le plan ?" Oui ou Non. Pas de charge mentale, pas de culpabilisation.'
                    />
                </AnimatedReveal>
                <AnimatedReveal delay={baseDelay * 3}>
                    <HowItWorkStep
                        illustrationSrc={goal}
                        illustrationAlt="Illustration representant l'adaptation automatique"
                        stepNumber={4}
                        title="L'app s'adapte à toi"
                        description="Chaque semaine, ton plan s'ajuste selon tes résultats. Pas de perte ? On change. Trop dur ? On simplifie."
                    />
                </AnimatedReveal>
            </div>
        </div>
    );
}

export default HowItWorkSection;