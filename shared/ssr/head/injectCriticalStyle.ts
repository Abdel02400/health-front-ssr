import criticalStyles from '@client-assets/styles/critical.scss?inline';
import { DATA_CRITICAL_STYLE } from '@shared-constants/ssr';

export const injectCriticalStyle = (nonce: string): string => {
    if (typeof criticalStyles !== 'string' || criticalStyles.trim() === '') return '';
    return `<style ${DATA_CRITICAL_STYLE} nonce="${nonce}">${criticalStyles}</style>`;
};
