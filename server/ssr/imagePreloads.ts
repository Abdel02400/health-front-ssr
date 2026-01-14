import fs from 'node:fs';
import type { Manifest } from 'vite';
import { CLIENT_MANIFEST_PATH } from '@server-config/paths';
import { ENV } from '@server-config/env';

let cachedManifest: Manifest | null = null;
let cachedPreloadTemplate: string | null = null;

const loadManifest = (): Manifest | null => {
    if (!ENV.isProduction) return null;
    if (cachedManifest) return cachedManifest;

    try {
        cachedManifest = JSON.parse(fs.readFileSync(CLIENT_MANIFEST_PATH, 'utf-8'));
        return cachedManifest;
    } catch {
        console.info('Failed to load Vite manifest for image preloads');
        return null;
    }
};

export const createImagePreloads = (nonce: string): string => {
    const manifest = loadManifest();
    if (!manifest) return '';

    if (cachedPreloadTemplate) {
        return cachedPreloadTemplate.replace(/nonce="[^"]*"/g, `nonce="${nonce}"`);
    }

    cachedPreloadTemplate = Object.entries(manifest)
        .filter(([src]) => src.endsWith('.png'))
        .map(([, { file }]) => `<link rel="preload" as="image" href="/${file}" type="image/png" nonce="${nonce}">`)
        .join('\n');

    return cachedPreloadTemplate;
};
