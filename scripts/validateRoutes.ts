import fs from 'node:fs';
import path from 'node:path';
import { routeConfig } from '@shared-router/routeConfig';

const entries = [routeConfig.layout.entry, ...routeConfig.pages.map(p => p.entry)];
const missing: string[] = [];

for (const entry of entries) {
    const fullPath = path.resolve(process.cwd(), entry);
    if (!fs.existsSync(fullPath)) {
        missing.push(entry);
    }
}

if (missing.length > 0) {
    console.error(
        `Missing route entry files:\n` +
        missing.map(f => `  - ${f}`).join('\n') +
        `\n\nUpdate shared/router/routeConfig.ts to fix this.`
    );
    process.exit(1);
}

console.info(`All ${entries.length} route entries validated`);
