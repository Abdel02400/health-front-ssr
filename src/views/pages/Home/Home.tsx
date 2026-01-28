import type { ReactElement } from 'react';
import HeroSection from './HeroSection/HeroSection';
import HowItWorkSection from './HowItWorkSection/HowItWorkSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import AboutSection from './AboutSection/AboutSection';
import './home.scss';

function Home(): ReactElement {
    return (
        <div className='home'>
            <HeroSection />
            <HowItWorkSection />
            <FeaturesSection />
            <AboutSection />
        </div>
    );
}

export default Home;