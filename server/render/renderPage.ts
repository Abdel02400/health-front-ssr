import { createWebRequest } from '@server-http/createWebRequest';
import { ROUTER_RESULT } from '@shared-types/router';
import { handleSSRResponse } from '@server-ssr/handleSSRResponse';
import { loadEntryServer } from '@server-render/loadEntryServer';
import { loadHtmlTemplate } from '@server-render/loadHtmlTemplate';
import { streamHtmlResponse } from '@server-render/streamHtmlResponse';
import { createSSRStore } from '@client-store/store';
import type { RenderPageFunction } from '@server-types/render';

export const renderPage: RenderPageFunction = async (req, res, runtime) => {
    const webRequest = createWebRequest(req);
    const { render, createHeadHtml, createSSRRouter, devStyles } = await loadEntryServer(runtime.vite);

    const result = await createSSRRouter(webRequest);
    if (result.type === ROUTER_RESULT.RESPONSE) {
        await handleSSRResponse(result, res);
        return;
    }

    const template = await loadHtmlTemplate(webRequest.url, runtime);
    const store = createSSRStore();
    let didError = false;

    const stream = render(result.router, result.context, store, {
        onShellReady() {
            streamHtmlResponse({
                res,
                stream,
                template,
                createHeadHtml,
                didErrorRef: { value: didError },
                devStyles
            });
        },
        onShellError() {
            res.status(500).send('<h1>Something went wrong</h1>');
        },
        onError(err) {
            didError = true;
            console.error(err);
        },
    });
};
