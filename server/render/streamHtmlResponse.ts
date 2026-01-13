import { Transform } from 'node:stream';
import { ENV } from '@server-config/env';
import type { StreamHtmlResponseFunction } from '@server-types/render';

const STREAM_END_MARKER = '<vite-streaming-end></vite-streaming-end>';

export const streamHtmlResponse: StreamHtmlResponseFunction = ({ res, stream, template, createHeadHtml, didErrorRef, devStyles }) => {
    const nonce = res.locals.cspNonce;
    if (!nonce) throw new Error('CSP nonce missing in streamHtmlResponse');

    res.status(didErrorRef.value ? 500 : 200);
    res.set({ 'Content-Type': 'text/html' });

    let htmlEnded = false;
    let headHtml = createHeadHtml(nonce);
    if (devStyles) headHtml += devStyles;

    const [htmlStart, htmlEnd] = template.replace('<!--app-head-->', headHtml).split('<!--app-html-->');

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            if (!htmlEnded) {
                const str = chunk.toString();
                const markerIndex = str.indexOf(STREAM_END_MARKER);
                if (markerIndex !== -1) {
                    htmlEnded = true;
                    res.write(str.slice(0, markerIndex) + htmlEnd, 'utf-8');
                } else res.write(str, 'utf-8');
            } else res.write(chunk, encoding);
            callback();
        },
    });

    const abortTimer = setTimeout(() => {
        if (!htmlEnded) stream.abort();
    }, ENV.ssrAbortDelay);

    const cleanup = () => clearTimeout(abortTimer);

    transformStream.on('finish', () => {
        cleanup();
        if (!htmlEnded) res.write(htmlEnd);
        res.end();
    });

    transformStream.on('error', (err) => {
        cleanup();

        console.error('Stream transform error:', err);

        if (!res.headersSent) res.status(500).send('<h1>Something went wrong</h1>');
        else res.end();
    });

    res.on('close', () => {
        cleanup();
        if (!htmlEnded) stream.abort();
    });

    res.write(htmlStart);
    stream.pipe(transformStream);
};