import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import Header from '@client-components/Header/Header';

function App(): ReactElement {
    return (
        <div className='App'>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
