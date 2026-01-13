const REACT_STREAMING_SCRIPT_HASHES: string[] = [
    "'sha256-gOx3nRh8znDQR7T1VkI+fFXDgsNzf5enQqdi7NP11Vk='",
    "'sha256-7mu4H06fwDCjmnxxr/xNHyuQC6pLTHr4M2E4jXw5WZs='",
    "'sha256-QAlSewaQLi/NPCznjAZSyvQ72heD0VdxmNDDkZeCxgc='"
];

const COMMON_CSP_DIRECTIVES: string[] = [
    "default-src 'self'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'"
];

const PROD_ONLY_CSP_DIRECTIVES: string[] = [
    "connect-src 'self'",
    "upgrade-insecure-requests"
];

const buildScriptSrc = (nonce: string): string => {
    return [
        "'self'",
        `'nonce-${nonce}'`,
        ...REACT_STREAMING_SCRIPT_HASHES
    ].join(' ');
};

export const CSP_HEADER_NAME: string = 'Content-Security-Policy';

export const DEV_CSP_DIRECTIVES: string[] = [
    ...COMMON_CSP_DIRECTIVES,
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "connect-src 'self' ws: http:"
];

export const buildProdCspDirectives = (nonce: string): string[] => {
    return [
        ...COMMON_CSP_DIRECTIVES,
        `script-src ${buildScriptSrc(nonce)}`,
        `style-src 'self' 'nonce-${nonce}'`,
        ...PROD_ONLY_CSP_DIRECTIVES
    ];
};

export const buildCspHeader = (directives: string[]): string => directives.join('; ');