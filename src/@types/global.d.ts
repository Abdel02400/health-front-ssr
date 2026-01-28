import type { HydrationState } from 'react-router';

declare global {
    interface Window {
        __staticRouterHydrationData?: HydrationState;
    }
}

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number;
    }
}

export {};
