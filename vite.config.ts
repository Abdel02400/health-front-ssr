import path from 'node:path';
import { defineConfig, type ConfigEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { loadViteAppEnv } from './vite.env';

export default defineConfig(({ mode }: ConfigEnv) => {
    const { base, host, port } = loadViteAppEnv(mode);

    return {
        plugins: [react(), tsconfigPaths()],
        base,
        css: {
            devSourcemap: true,
            preprocessorOptions: {
                scss: {
                    loadPaths: [path.resolve(__dirname, 'src/assets/styles')],
                    silenceDeprecations: [],
                    fatalDeprecations: [],
                    verbose: true
                }
            }
        },
        server: {
            host,
            port,
            strictPort: true,
            hmr: {
                protocol: "ws",
                host,
                port
            }
        },
        build: {
            target: "esnext",
            minify: true,
            manifest: true
        },
        esbuild: {
            target: "esnext"
        }
    };
});
