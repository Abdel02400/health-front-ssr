import type { HandleSSRResponseFunction } from '@server-types/ssr';

export const handleSSRResponse: HandleSSRResponseFunction = async (result, res) => {
    const body = result.response.body ? await result.response.text() : null;

    res.status(result.response.status);
    result.response.headers.forEach((value, key) => res.setHeader(key, value));

    if (body) res.send(body);
    else res.end();
};