import { useEffect, type ReactElement } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useScroll } from '@client-hooks/useScroll';
import Footer from '@client-components/Footer/Footer';
import Header from '@client-components/Header/Header';
import NavigationProgress from '@client-components/NavigationProgress/NavigationProgress';
import MobileNavigation from '@client-components/MobileNavigation/MobileNavigation';

function App(): ReactElement {
    const { pathname } = useLocation();
    const { scrollToTop } = useScroll();

    useEffect(() => {
        scrollToTop();
    }, [pathname, scrollToTop]);

    return (
        <div className='App'>
            <NavigationProgress />
            <Header />
            <Outlet />
            <Footer />
            <MobileNavigation />
        </div>
    );
}

export default App;
