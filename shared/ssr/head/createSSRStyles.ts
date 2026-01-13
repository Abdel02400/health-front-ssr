import criticalStyles from '@client-assets/styles/critical.scss?inline';
import { CRITICAL_STYLES_ID } from '@shared-constants/ssr';

export const createCriticalStyles = (nonce: string): string => {
    if (!criticalStyles) return '';
    return `<style id="${CRITICAL_STYLES_ID}" nonce="${nonce}">${criticalStyles}</style>`;
};
