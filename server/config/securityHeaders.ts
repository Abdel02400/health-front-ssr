import { ENV } from '@server-config/env';

type SecurityHeader = {
    name: string;
    value: string;
};

const COMMON_SECURITY_HEADERS: SecurityHeader[] = [
    { name: 'X-Frame-Options', value: 'DENY' },
    { name: 'X-Content-Type-Options', value: 'nosniff' },
    { name: 'X-XSS-Protection', value: '1; mode=block' },
    { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
];

const PROD_ONLY_SECURITY_HEADERS: SecurityHeader[] = [
    { name: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
];

export const getSecurityHeaders = (): SecurityHeader[] => {
    return ENV.isProduction
        ? [...COMMON_SECURITY_HEADERS, ...PROD_ONLY_SECURITY_HEADERS]
        : COMMON_SECURITY_HEADERS;
};