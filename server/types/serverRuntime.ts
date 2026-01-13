import type { Express } from 'express';
import type { ViteDevServer } from 'vite';

export type ServerRuntime = {
    app: Express;
    vite?: ViteDevServer;
    templateHtml?: string;
};

export type SetupEnvironmentFunction = (app: Express, runtime: ServerRuntime) => Promise<void>;
export type SetupSSRFunction = (app: Express, runtime: ServerRuntime) => void;
export type StartServerFunction = (app: Express) => void;