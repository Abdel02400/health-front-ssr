import type { DataRouter, StaticHandlerContext } from 'react-router';

type RouterRenderResult  = {
    type: typeof ROUTER_RESULT.ROUTER;
    router: DataRouter;
    context: StaticHandlerContext;
};

export type RouterResponseResult = {
    type: typeof ROUTER_RESULT.RESPONSE;
    response: Response;
};

export type SSRRouterResult = RouterResponseResult | RouterRenderResult;

export const ROUTER_RESULT = {
    RESPONSE: 'response',
    ROUTER: 'router',
} as const;

export type CreateSSRRouterFunction = (request: Request) => Promise<SSRRouterResult >;