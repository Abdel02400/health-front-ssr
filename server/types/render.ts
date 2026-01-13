import type { Request, Response } from 'express';
import type { ViteDevServer } from 'vite';
import type { DataRouter, StaticHandlerContext } from 'react-router';
import type { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import type { ServerRuntime } from '@server-types/serverRuntime';
import type { CreateSSRRouterFunction } from '@shared-types/router';
import type { SSRStore } from '@shared-types/store';

type EntryServerModule = { entryServer: EntryServerType; };
type CreateHeadHtml = (nonce: string) => string;
type StreamHtmlResponseOptions = {
    res: Response;
    stream: PipeableStream;
    template: string;
    createHeadHtml: CreateHeadHtml;
    didErrorRef: { value: boolean };
    devStyles?: string;
};

export type RenderFunction = (
    router: DataRouter,
    context: StaticHandlerContext,
    store: SSRStore,
    options?: RenderToPipeableStreamOptions
) => PipeableStream;
export type AssertEntryServerModuleFunction = (mod: unknown) => asserts mod is EntryServerModule;
export type EntryServerType = {
    render: RenderFunction;
    createHeadHtml: CreateHeadHtml;
    createSSRRouter: CreateSSRRouterFunction;
    devStyles?: string;
};
export type RenderPageFunction = (req: Request, res: Response, runtime: ServerRuntime) => Promise<void>;
export type LoadEntryServerFunction = (vite?: ViteDevServer) => Promise<EntryServerType>;
export type LoadHtmlTemplateFunction = (url: string, runtime: ServerRuntime) => Promise<string>;
export type StreamHtmlResponseFunction = (options: StreamHtmlResponseOptions) => void;