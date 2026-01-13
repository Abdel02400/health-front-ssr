import { loadEnv } from 'vite';

type LoadViteAppEnvFunction = (mode: string) => {
  base: string;
  host: string;
  port: number;
};

export const loadViteAppEnv: LoadViteAppEnvFunction = (mode) => {
    const env = loadEnv(mode, process.cwd());
    const port = Number(env.VITE_APP_PORT);

    return {
        base: env.VITE_APP_BASE || '/',
        host: env.VITE_APP_HOST || 'localhost',
        port:  Number.isFinite(port) ? port : 5173,
    };
};