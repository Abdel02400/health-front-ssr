import type { RouteObject } from 'react-router';
import App from '@client-app';
import Home from '@client-pages/Home/Home';
import Features from '@client-pages/Features/Features';
import Subscriptions from '@client-pages/Subscriptions/Subscriptions';
import About from '@client-pages/About/About';
import Contact from '@client-pages/Contact/Contact';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'features',
                element: <Features />
            },
            {
                path: 'subscriptions',
                element: <Subscriptions />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
];