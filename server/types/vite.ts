import type { Express } from 'express';
import type { ViteDevServer } from 'vite';

export type SetupViteFunction = (app: Express) => Promise<ViteDevServer>;
