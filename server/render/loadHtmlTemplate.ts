import fs from 'node:fs/promises';
import path from 'node:path';
import { PROJECT_ROOT, INDEX_HTML_FILENAME } from '@server-config/paths';
import { ENV } from '@server-config/env';
import type { LoadHtmlTemplateFunction } from '@server-types/render';

export const loadHtmlTemplate: LoadHtmlTemplateFunction = async (url, runtime) => {
    if (!ENV.isProduction) {
        if (!runtime.vite) throw new Error('Vite instance is required in development mode');
        const indexPath = path.resolve(PROJECT_ROOT, INDEX_HTML_FILENAME);
        const rawTemplate = await fs.readFile(indexPath, 'utf-8');
        return runtime.vite.transformIndexHtml(url, rawTemplate);
    }

    if (!runtime.templateHtml) throw new Error('HTML template not loaded in production mode');
    return runtime.templateHtml;
};