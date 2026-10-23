import { join } from "node:path";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderCard } from "../../og/render";

// One link-preview image per case study, written to /og/<slug>.jpg at build time
export const getStaticPaths = (async () => {
  const work = await getCollection("work", ({ data }) => data.published);
  return work.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ entry: CollectionEntry<"work"> }> = async ({ props }) => {
  const { entry } = props;
  const { title, client, role, period } = entry.data;
  const image = await renderCard({
    title,
    eyebrow: `Case study · ${client}`,
    meta: `${role} · ${period}`,
    cover: join(process.cwd(), "src/assets/work", `${entry.id}.png`),
  });
  return new Response(new Uint8Array(image), { headers: { "Content-Type": "image/jpeg" } });
};
