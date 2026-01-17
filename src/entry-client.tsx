import { StrictMode, type ReactElement } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { store } from '@client-store/store';
import { createRouter } from '@client-router/routerClient';
import { initializeRenderState } from '@client-utils/initializeRenderState';

const hydrate = async () => {
    const router = await createRouter();

    const rootElement: HTMLElement | null = document.getElementById('root');
    if (!rootElement) throw new Error('Root element with id "root" not found. Hydration cannot proceed.');

    const app: ReactElement = (
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </StrictMode>
    );

    initializeRenderState();
    hydrateRoot(rootElement, app);
};

hydrate();