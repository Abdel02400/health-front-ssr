import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import Header from '@client-components/Header/Header';
import NavigationProgress from '@client-components/NavigationProgress/NavigationProgress';

function App(): ReactElement {
    return (
        <div className='App'>
            <NavigationProgress />
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
