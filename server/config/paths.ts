import path from 'node:path';

// ---- Project root
export const PROJECT_ROOT = process.cwd();

// ---- Build output
export const DIST_PATH = path.resolve(PROJECT_ROOT, 'dist');

// ---- Filename
export const INDEX_HTML_FILENAME = 'index.html';

// ---- Client (build)
export const CLIENT_DIST_PATH = path.resolve(DIST_PATH, 'client');
export const CLIENT_INDEX_HTML_PATH = path.resolve(CLIENT_DIST_PATH, INDEX_HTML_FILENAME);
export const CLIENT_DIST_ASSETS_PATH = path.resolve(CLIENT_DIST_PATH, 'assets');
export const CLIENT_MANIFEST_PATH = path.resolve(CLIENT_DIST_PATH, '.vite', 'manifest.json');

// ---- Server SSR (build)
export const SERVER_DIST_PATH = path.resolve(DIST_PATH, 'server');
export const SERVER_DIST_ENTRY_FILE = path.resolve(SERVER_DIST_PATH, 'entry-server.js');

// ---- Server App (build)
export const SERVER_APP_DIST_PATH = path.resolve(DIST_PATH, 'server-app');
export const SERVER_APP_DIST_ENTRY_FILE = path.resolve(SERVER_APP_DIST_PATH, 'index.js');

// ---- Source
export const CLIENT_SRC_PATH = path.resolve(PROJECT_ROOT, 'src');
export const ENTRY_SERVER_PATH = path.resolve(CLIENT_SRC_PATH, 'entry-server.tsx');
export const CLIENT_ASSETS_PATH = path.resolve(CLIENT_SRC_PATH, 'assets');

// ---- Server entry
export const SERVER_SRC_PATH = path.resolve(PROJECT_ROOT, 'server');
export const SERVER_ENTRY_PATH = path.resolve(SERVER_SRC_PATH, 'index.ts');