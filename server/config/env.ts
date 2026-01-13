import { NODE_ENV, type NodeEnv } from '@server-types/env';
import { toNumber } from '@server-utils/number';

const getNodeEnv = (): NodeEnv => {
    const env = process.env.NODE_ENV;
    if (env === NODE_ENV.PRODUCTION || env === NODE_ENV.TEST) return env;
    return NODE_ENV.DEVELOPMENT;
};

const nodeEnv = getNodeEnv();
const port = toNumber(process.env.PORT, 3000);
const host = process.env.APP_HOST || `http://localhost:${port}`;

export const ENV = {
    isProduction: nodeEnv === 'production',
    ssrAbortDelay: toNumber(process.env.SSR_ABORT_DELAY, 10_000),
    port,
    host
} as const;