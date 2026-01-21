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
            <Title text='3 étapes simples pour atteindre votre objectif'></Title>
            <div className='how-it-work-section__steps'>
                <AnimatedReveal>
                    <HowItWorkStep
                        illustrationSrc={goal}
                        illustrationAlt='Illustration representant les objectifs'
                        stepNumber={1}
                        title='Définir son objectif'
                        description='Perte de poids ou prise de masse, à votre rythme et selon vos contraintes.'
                    />
                </AnimatedReveal>
                <AnimatedReveal delay={baseDelay}>
                    <HowItWorkStep
                        illustrationSrc={custom}
                        illustrationAlt='Illustration representant la personnalisation de son profil'
                        stepNumber={2}
                        title='Personnaliser son profil'
                        description='Préférences alimentaires, habitudes, allergies et contraintes du quotidien.'
                    />
                </AnimatedReveal>
                <AnimatedReveal delay={baseDelay * 2}>
                    <HowItWorkStep
                        illustrationSrc={analyse}
                        illustrationAlt='Illustration representant le suivi de son profil'
                        stepNumber={3}
                        title='Suivre et ajuster'
                        description='Health analyse votre progression et ajuste vos repas pour rester motivé.'
                    />
                </AnimatedReveal>
            </div>
        </div>
    );
}

export default HowItWorkSection;