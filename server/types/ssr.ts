import type { RequestHandler, Request, Response } from 'express';
import type { ServerRuntime } from '@server-types/serverRuntime';
import type { RouterResponseResult } from '@shared-types/router';

export type SSRMiddlewareFactory = (runtime: ServerRuntime) => RequestHandler;
export type ShouldSkipSSRFunction = (req: Request) => boolean;
export type HandleSSRResponseFunction = (result: RouterResponseResult, res: Response) => Promise<void>;