// Generates static HTML by rendering the React app server-side (renderToString)
// and injecting the result into dist/index.html after the Vite client build.
import { build } from "vite";
import { readFileSync, writeFileSync, rmSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// 1. Build the server entry (SSR bundle, no base path needed)
await build({
  root,
  base: "/",
  build: {
    ssr: "src/entry-server.tsx",
    outDir: "dist-server",
    emptyOutDir: true,
    rollupOptions: { output: { format: "es" } },
  },
  logLevel: "warn",
});

// 2. Import the render function and generate HTML
const serverEntryUrl = pathToFileURL(resolve(root, "dist-server/entry-server.js")).href;
const { render } = await import(serverEntryUrl);
const appHtml = render();

// 3. Inject rendered HTML into dist/index.html
const templatePath = resolve(root, "dist/index.html");
const template = readFileSync(templatePath, "utf-8");
const output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);
writeFileSync(templatePath, output);

// 4. Remove temporary SSR build
rmSync(resolve(root, "dist-server"), { recursive: true, force: true });

console.log("✅ Pre-rendering concluído — HTML estático gerado em dist/index.html");
