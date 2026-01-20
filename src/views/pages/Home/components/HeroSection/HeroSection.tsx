import type { ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import Button from '@client-components/Button/Button';
import dashboardPreview from '@client-assets/images/dashboard-preview.png';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import './hero-section.scss';

function HeroSection(): ReactElement {
    return (
        <section className='hero-section container'>
            <div className='hero-section__content'>
                <Title 
                    text='Atteignez vos objectifs physiques avec un coach IA intelligent'
                    isAnimated
                />
                <AnimatedReveal delay={600}>
                    <p className='hero-section__content-descriptions'>
                        Organisez votre alimentation, suivez votre progression et restez motivé grâce à un accompagnement personnalisé.
                    </p>
                </AnimatedReveal>
                <AnimatedReveal delay={600}>
                    <div className='hero-section__content-actions'>
                        <Button>Démarrer l'essai gratuit</Button>
                        <Button variant='secondary'>Découvrir les fonctionnalités</Button>
                    </div>
                </AnimatedReveal>
                <AnimatedReveal delay={600}>
                    <p className='hero-section__content-subscrtiption'>1 mois gratuit - Sans carte bancaire</p>
                </AnimatedReveal>
            </div>
            <AnimatedReveal delay={1200}>
                <img className='hero-section__dashboard-preview' src={dashboardPreview} alt="Aperçu du tableau de bord Health" />
            </AnimatedReveal>
        </section>
    );
}

export default HeroSection;