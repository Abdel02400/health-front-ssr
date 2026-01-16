import { DATA_DEV_FOUC } from '@shared-constants/ssr';

export const injectDevFoucStyle = (nonce: string): string => {
    return `
        <style ${DATA_DEV_FOUC} nonce="${nonce}">
                html {
                    opacity: 0;
                    transition: opacity 60ms ease-out;
                }
        </style>
    `;
};