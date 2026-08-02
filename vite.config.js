import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(__dirname, '..');

/**
 * Plugin: serve /assets/... and /favicon.ico from the workspace root (parent folder)
 * without setting publicDir to the parent (which causes a dist-overlap warning).
 */
function serveParentAssets() {
  return {
    name: 'serve-parent-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (!url) return next();
        // Match /assets/... or /favicon.ico
        if (url.startsWith('/assets/') || url === '/favicon.ico') {
          const filePath = path.join(workspaceRoot, url);
          if (fs.existsSync(filePath)) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes = {
              '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
              '.gif': 'image/gif', '.svg': 'image/svg+xml', '.webp': 'image/webp',
              '.ico': 'image/x-icon', '.pdf': 'application/pdf',
              '.woff': 'font/woff', '.woff2': 'font/woff2',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), serveParentAssets()],
  // Allow Vite's file-system access to the parent folder
  server: {
    fs: {
      allow: [workspaceRoot],
    },
  },
});
