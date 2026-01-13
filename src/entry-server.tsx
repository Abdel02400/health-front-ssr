import { StrictMode } from 'react';
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouterProvider, type DataRouter, type StaticHandlerContext } from 'react-router';
import { createHeadHtml } from '@shared-ssr/head/createHeadHtml';
import { createSSRRouter } from '@shared-router/createSSRRouter';
import type { SSRStore } from '@shared-types/store';
import type { EntryServerType, RenderFunction } from '@server-types/render';

const render: RenderFunction = (
    router: DataRouter,
    context: StaticHandlerContext,
    store: SSRStore,
    options?: RenderToPipeableStreamOptions
) => {
    return renderToPipeableStream(
        <StrictMode>
            <Provider store={store}>
                <StaticRouterProvider router={router} context={context} />
                <vite-streaming-end></vite-streaming-end>
            </Provider>
        </StrictMode>,
        options,
    );
};

export const entryServer: EntryServerType = { render, createHeadHtml, createSSRRouter };
