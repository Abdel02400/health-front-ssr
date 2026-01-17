import fs from 'node:fs';
import type { Manifest } from 'vite';
import { CLIENT_MANIFEST_PATH } from '@server-config/paths';
import { getEntriesForPath } from '@shared-router/routeConfig';
import { ENV } from '@server-config/env';
import type { RouteAssetsType } from '@server-types/routes';

let cachedManifest: Manifest | null = null;

const loadManifest = (): Manifest => {
    if (cachedManifest) return cachedManifest;

    const content = fs.readFileSync(CLIENT_MANIFEST_PATH, 'utf-8');
    cachedManifest = JSON.parse(content) as Manifest;
    return cachedManifest;
};

const collectChunkAssets = (
    manifest: Manifest,
    key: string,
    js: Set<string>,
    css: Set<string>,
    visited: Set<string>
) => {
    if (visited.has(key)) return;
    visited.add(key);

    const chunk = manifest[key];
    if (!chunk) return;

    if (chunk.file) js.add(`/${chunk.file}`);
    if (chunk.css) chunk.css.forEach(c => css.add(`/${c}`));

    if (chunk.imports) {
        for (const imported of chunk.imports) {
            collectChunkAssets(manifest, imported, js, css, visited);
        }
    }
};

export function getRouteAssets(path: string): RouteAssetsType | null {
    if (!ENV.isProduction) return null;

    const manifest = loadManifest();
    const sources = getEntriesForPath(path);

    if (sources.length === 0) return { js: [], css: [] };

    const js = new Set<string>();
    const css = new Set<string>();
    const visited = new Set<string>();

    for (const sourceFile of sources) {
        collectChunkAssets(manifest, sourceFile, js, css, visited);
    }

    return { js: [...js], css: [...css] };
}