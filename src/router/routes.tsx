import type { RouteObject } from 'react-router';
import App from '@client-app';
import Home from '@client-pages/Home/Home';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    },
];