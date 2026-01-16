import { pathToFileURL } from 'node:url';
import { ENTRY_SERVER_PATH, SERVER_DIST_ENTRY_FILE } from '@server-config/paths';
import { ENV } from '@server-config/env';
import { assertEntryServerModule } from '@server-render/assertEntryServerModule';
import type { EntryServerType, LoadEntryServerFunction } from '@server-types/render';

let cachedProdEntry: EntryServerType | null = null;

export const loadEntryServer: LoadEntryServerFunction = async (vite) => {
    if (!ENV.isProduction) {
        if (!vite) throw new Error('Vite instance is required in development mode');

        const mod = await vite.ssrLoadModule(ENTRY_SERVER_PATH);
        assertEntryServerModule(mod);
        return mod.entryServer;
    }

    if (cachedProdEntry) return cachedProdEntry;

    const mod = await import(pathToFileURL(SERVER_DIST_ENTRY_FILE).href);
    assertEntryServerModule(mod);
    cachedProdEntry = mod.entryServer;

    return cachedProdEntry;
};