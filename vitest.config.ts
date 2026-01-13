import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitest.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        projects: [
            {
                extends: true,
                test: {
                    name: 'server',
                    environment: 'node',
                    include: ['__test__/**/*.test.{ts,tsx}']
                }
            },
            {
                extends: true,
                test: {
                    name: 'client',
                    environment: 'jsdom',
                    include: ['src/__test__/**/*.test.{ts,tsx}']
                }
            }
        ]
    }
});