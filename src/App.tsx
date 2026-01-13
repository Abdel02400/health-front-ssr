import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import Header from '@client-components/Header/Header';
import { useRemoveDevStyles } from '@client-hooks/useRemoveDevStyles';

function App(): ReactElement {
    useRemoveDevStyles();

    return (
        <div className='App'>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
