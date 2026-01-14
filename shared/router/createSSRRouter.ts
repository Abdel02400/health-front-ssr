import { createStaticRouter, createStaticHandler } from 'react-router';
import { routes } from '@client-router/routes';
import { ROUTER_RESULT, type CreateSSRRouterFunction } from '@shared-types/router';

const handler = createStaticHandler(routes);

export const createSSRRouter: CreateSSRRouterFunction = async (request: Request) => {
    const context = await handler.query(request);

    if (context instanceof Response) return { type: ROUTER_RESULT.RESPONSE, response: context };

    return {
        type: ROUTER_RESULT.ROUTER,
        router: createStaticRouter(handler.dataRoutes, context),
        context,
    };
};
