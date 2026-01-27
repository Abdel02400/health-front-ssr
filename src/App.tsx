import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import Footer from '@client-components/Footer/Footer';
import Header from '@client-components/Header/Header';
import NavigationProgress from '@client-components/NavigationProgress/NavigationProgress';
import MobileNavigation from '@client-components/MobileNavigation/MobileNavigation';
import ScrollToTop from '@client-components/ScrollToTop/ScrollToTop';

function App(): ReactElement {
    return (
        <div className='App'>
            <NavigationProgress />
            <Header />
            <ScrollToTop>
                <Outlet />
            </ScrollToTop>
            <Footer />
            <MobileNavigation />
        </div>
    );
}

export default App;
