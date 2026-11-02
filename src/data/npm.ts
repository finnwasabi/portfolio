import { packages } from "./site";

// npm is asked once per package at build time. If it is unreachable the page
// still renders, just without the number: a missing figure beats a failed build.
// Imported by the hero and the open source section; the module runs once per build.
async function downloads(pkg: string): Promise<number | null> {
  const url = `https://api.npmjs.org/downloads/point/last-month/@tunghtml%2Fstrapi-plugin-${pkg}`;
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) return null;
    const j = await r.json();
    return typeof j.downloads === "number" ? j.downloads : null;
  } catch {
    return null;
  }
}

export const npmPackages = await Promise.all(
  packages.map(async (p) => ({ ...p, downloads: await downloads(p.name) })),
);

export const npmTotal = npmPackages.reduce((sum, p) => sum + (p.downloads ?? 0), 0);
