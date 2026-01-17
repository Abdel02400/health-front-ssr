import type { Request, Response } from 'express';
import type { ViteDevServer, ModuleNode } from 'vite';
import type { DataRouter, StaticHandlerContext } from 'react-router';
import type { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import type { ServerRuntime } from '@server-types/serverRuntime';
import type { CreateSSRRouterFunction } from '@shared-types/router';
import type { SSRStore } from '@shared-types/store';
import type { CreateHeadHtmlFunction } from '@shared-ssr/head/createHeadHtml';

type EntryServerModule = { entryServer: EntryServerType; };
type StreamHtmlResponseOptions = {
    res: Response;
    stream: PipeableStream;
    template: string;
    createHeadHtml: CreateHeadHtmlFunction;
    path: string;
    didErrorRef: { value: boolean };
};

export type CollectCssModulesFunction = (
    entryModule: ModuleNode | undefined,
    visited?: Set<string>,
    cssModulePaths?: string[]
) => string[];

export type CollectCssContentsFunction = (
    vite: ViteDevServer,
    cssModulePaths: string[]
) => Promise<string[]>;

export type RenderFunction = (
    router: DataRouter,
    context: StaticHandlerContext,
    store: SSRStore,
    options?: RenderToPipeableStreamOptions
) => PipeableStream;
export type AssertEntryServerModuleFunction = (mod: unknown) => asserts mod is EntryServerModule;
export type EntryServerType = {
    render: RenderFunction;
    createHeadHtml: CreateHeadHtmlFunction;
    createSSRRouter: CreateSSRRouterFunction;
};
export type RenderPageFunction = (req: Request, res: Response, runtime: ServerRuntime) => Promise<void>;
export type LoadEntryServerFunction = (vite?: ViteDevServer) => Promise<EntryServerType>;
export type LoadHtmlTemplateFunction = (url: string, runtime: ServerRuntime) => Promise<string>;
export type StreamHtmlResponseFunction = (options: StreamHtmlResponseOptions) => void;