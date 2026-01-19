import { useEffect, type ReactElement } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '@client-components/Header/Header';
import NavigationProgress from '@client-components/NavigationProgress/NavigationProgress';
import MobileNavigation from '@client-components/MobileNavigation/MobileNavigation';
import { useScroll } from '@client-hooks/useScroll';

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
            <MobileNavigation />
        </div>
    );
}

export default App;
