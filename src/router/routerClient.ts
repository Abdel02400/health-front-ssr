import { createBrowserRouter, matchRoutes } from "react-router";
import { routes } from "@client-router/routes";

const loadLazyRoutes = async () => {
    const lazyMatches = matchRoutes(routes, window.location)?.filter(
        (m) => m.route.lazy
    );

    if (lazyMatches && lazyMatches.length > 0) {
        await Promise.all(
            lazyMatches.map(async (m) => {
                const lazyRoute = m.route.lazy;
                if (typeof lazyRoute === 'function') {
                    const routeModule = await lazyRoute();
                    Object.assign(m.route, { ...routeModule, lazy: undefined });
                }
            })
        );
    }
};

export const createRouter = async () => {
    await loadLazyRoutes();
    return createBrowserRouter(routes, { hydrationData: window.__staticRouterHydrationData });
};