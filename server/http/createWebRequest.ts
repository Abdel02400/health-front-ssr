import { Readable } from 'node:stream';
import type { Request as ExpressRequest } from 'express';

type CreateWebRequestFunction = (req: ExpressRequest) => Request;

export const createWebRequest: CreateWebRequestFunction = (req) => {
    const protocol = req.secure ? 'https' : 'http';
    const host = req.headers.host;

    if (!host) throw new Error('[SSR] Missing Host header');

    const url = new URL(req.originalUrl, `${protocol}://${host}`);
    const controller = new AbortController();

    req.on('close', () => controller.abort());

    const headers = new Headers();

    for (const [key, value] of Object.entries(req.headers)) {
        if (value == null) continue;
        headers.set(key, Array.isArray(value) ? value.join(',') : value);
    }

    const hasBody = !['GET', 'HEAD'].includes(req.method);
    const body = hasBody ? (Readable.toWeb(req) as BodyInit) : undefined;

    return new Request(url, {
        method: req.method,
        headers,
        body,
        signal: controller.signal,
    });
};