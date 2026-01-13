import type { AssertEntryServerModuleFunction } from '@server-types/render';

export const assertEntryServerModule: AssertEntryServerModuleFunction = (mod) => {
    if (typeof mod !== 'object' || mod === null || !('entryServer' in mod)) {
        throw new Error('entry-server must export entryServer');
    }
};