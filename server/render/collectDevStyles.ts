import { normalizePath } from 'vite';
import { ENTRY_SERVER_PATH, PROJECT_ROOT } from '@server-config/paths';
import { DEV_STYLES_ID } from '@shared-constants/ssr';
import type { 
    CollectCssModulesFunction,
    CollectCssContentsFunction,
    CollectDevStylesFunction
} from '@server-types/render';

const collectCssModules: CollectCssModulesFunction = (
    entryModule,
    visited = new Set<string>(),
    cssModulePaths = []
) => {
    if (!entryModule || !entryModule.id || visited.has(entryModule.id)) return cssModulePaths;

    visited.add(entryModule.id);

    if (entryModule.id.endsWith('.scss')) cssModulePaths.push(entryModule.id);

    for (const importedModule of entryModule.importedModules) {
        collectCssModules(importedModule, visited, cssModulePaths);
    }

    return cssModulePaths;
};

const collectCssContents: CollectCssContentsFunction = async (vite, cssModulePaths) => {
    const projectRoot = normalizePath(PROJECT_ROOT);
    const contents = [];

    for (const cssPath of cssModulePaths) {
        const urlPath = normalizePath(cssPath).replace(projectRoot, '') + '?direct';
        const result = await vite.transformRequest(urlPath);

        if (result?.code) contents.push(result.code);
    }

    return contents;
};

export const collectDevStyles: CollectDevStylesFunction = async (vite) => {
    const moduleId = normalizePath(ENTRY_SERVER_PATH);
    const entryModule = vite.moduleGraph.getModuleById(moduleId);
    const cssModulePaths = collectCssModules(entryModule);
    const cssContents = await collectCssContents(vite, cssModulePaths);

    if (cssContents.length === 0) return '';
    return `<style id="${DEV_STYLES_ID}">${cssContents.join('\n')}</style>`;
};