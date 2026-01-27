import { DATA_THEME_INIT } from '@shared-constants/ssr';
import { THEME, THEME_STORAGE_KEY } from '@shared-types/theme';

export const injectThemeScript = (nonce: string): string => {
    return `
        <script ${DATA_THEME_INIT} nonce="${nonce}">
            (function() {
                var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
                var theme = stored === '${THEME.DARK}' || stored === '${THEME.LIGHT}'
                    ? stored
                    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? '${THEME.DARK}' : '${THEME.LIGHT}');
                document.documentElement.setAttribute('data-theme', theme);
            })();
        </script>
    `;
};
