import type { ReactElement } from 'react';
import HeroSection from './HeroSection/HeroSection';
import HowItWorkSection from './HowItWorkSection/HowItWorkSection';
import './home.scss';

function Home(): ReactElement {
    return (
        <div className='home'>
            <HeroSection />
            <HowItWorkSection />
        </div>
    );
}

export default Home;