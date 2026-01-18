import type { ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import Button from '@client-components/Button/Button';
import dashboardPreview from '@client-assets/images/dashboard-preview.png';
import HeroStats from './HeroStats/HeroStats';
import './hero-section.scss';

function HeroSection(): ReactElement {
    return (
        <section className='hero-section'>
            <div className='hero-section__content'>
                <Title>
                    Atteignez vos objectifs physiques avec un coach IA intelligent
                </Title>
                <p className='hero-section__content-descriptions'>
                    Organisez votre alimentation, suivez votre progression et restez motivé grâce à un accompagnement personnalisé.
                </p>
                <div className='hero-section__content-actions'>
                    <Button>Démarrer l'essai gratuit</Button>
                    <Button variant='secondary'>Découvrir les fonctionnalités</Button>
                </div>
                <p className='hero-section__content-subscrtiption'>1 mois gratuit - Sans carte bancaire</p>
                <HeroStats />
            </div>
            <img className='hero-section__dashboard-preview' src={dashboardPreview} alt="Aperçu du tableau de bord Health" />
        </section>
    );
}

export default HeroSection;