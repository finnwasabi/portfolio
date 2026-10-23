// Writes each page's own weight into its colophon once the build is done: the
// HTML plus the stylesheets and scripts it links, compressed the way the server
// sends them (zstd, or gzip on a Node without it). Fonts and images are left out
// and the colophon says so. Pages without the placeholder are left untouched.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

export const PLACEHOLDER = "@@page-weight@@";

const compress = (buf) => (zlib.zstdCompressSync ? zlib.zstdCompressSync(buf) : zlib.gzipSync(buf)).length;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith(".html") ? [path] : [];
  });

export default function pageWeight() {
  return {
    name: "page-weight",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let pages = 0;
        for (const file of walk(root)) {
          const html = readFileSync(file, "utf8");
          if (!html.includes(PLACEHOLDER)) continue;
          const linked = [
            ...html.matchAll(/<link rel="stylesheet" href="(\/[^"]+)"/g),
            ...html.matchAll(/<script[^>]*\ssrc="(\/_astro\/[^"]+)"/g),
          ]
            .map((m) => join(root, m[1]))
            .filter((p) => existsSync(p));
          const bytes = compress(Buffer.from(html)) + linked.reduce((sum, p) => sum + compress(readFileSync(p)), 0);
          writeFileSync(file, html.replaceAll(PLACEHOLDER, `${(bytes / 1024).toFixed(1)} KB`));
          pages++;
        }
        logger.info(`Wrote the page weight into ${pages} pages`);
      },
    },
  };
}
