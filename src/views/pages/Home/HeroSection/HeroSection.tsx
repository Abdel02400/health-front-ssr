import type { ReactElement } from 'react';
import AnimatedTitle from '@client-components/AnimatedTitle/AnimatedTitle';
import Button from '@client-components/Button/Button';
import dashboardPreview from '@client-assets/images/dashboard-preview.png';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import './hero-section.scss';

const TITLE_ANIMATION_DURATION = 1000;

function HeroSection(): ReactElement {
    return (
        <section className='hero-section container'>
            <AnimatedTitle
                text="Évolue à ton rythme avec une application qui s'adapte à toi"
                totalDuration={TITLE_ANIMATION_DURATION}
            />
            <AnimatedReveal className='hero-section__content' delay={TITLE_ANIMATION_DURATION}>
                <p className='hero-section__content-descriptions'>
                    Perte de poids ou prise de masse, ton plan s'ajuste chaque semaine selon tes résultats. Simple, efficace, sans prise de tête.
                </p>
                <div className='hero-section__content-actions'>
                    <Button>Démarrer l'essai gratuit</Button>
                    <Button variant='secondary'>Découvrir les fonctionnalités</Button>
                </div>
                <p className='hero-section__content-subscription'>1 mois gratuit - Sans carte bancaire</p>
                <img className='hero-section__dashboard-preview' src={dashboardPreview} alt="Aperçu du tableau de bord Health" />
            </AnimatedReveal>
        </section>
    );
}

export default HeroSection;