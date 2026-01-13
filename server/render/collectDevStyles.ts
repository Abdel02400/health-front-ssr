import type { ViteDevServer, ModuleNode } from 'vite';
import { ENTRY_SERVER_PATH, PROJECT_ROOT } from '@server-config/paths';
import { DEV_STYLES_ID } from '@shared-constants/ssr';

export async function collectDevStyles(vite: ViteDevServer): Promise<string> {
    const moduleId = ENTRY_SERVER_PATH.replace(/\\/g, '/');
    const entryModule = vite.moduleGraph.getModuleById(moduleId);

    const cssModulePaths: string[] = [];
    const visited = new Set<string>();

    function collectCssModules(mod: ModuleNode | undefined) {
        if (!mod || visited.has(mod.id || '')) return;
        visited.add(mod.id || '');

        if (mod.id?.match(/\.(scss)$/)) {
            cssModulePaths.push(mod.id);
        }

        for (const imported of mod.importedModules) {
            collectCssModules(imported);
        }
    }

    collectCssModules(entryModule);

    const cssContents: string[] = [];
    const projectRoot = PROJECT_ROOT.replace(/\\/g, '/');

    for (const cssPath of cssModulePaths) {
        const urlPath = cssPath.replace(projectRoot, '') + '?direct';
        const result = await vite.transformRequest(urlPath);
        if (result?.code) {
            cssContents.push(result.code);
        }
    }

    return cssContents.length > 0 ? `<style id="${DEV_STYLES_ID}">${cssContents.join('\n')}</style>` : '';
}
