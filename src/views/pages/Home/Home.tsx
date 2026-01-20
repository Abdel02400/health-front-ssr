import type { ReactElement } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import './home.scss';

function Home(): ReactElement {
    return (
        <div className='home'>
            <HeroSection />
        </div>
    );
}

export default Home;