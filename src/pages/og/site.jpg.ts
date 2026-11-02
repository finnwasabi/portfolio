import type { APIRoute } from "astro";
import { renderCard } from "../../og/render";
import { site } from "../../data/site";

// The link-preview card for every page without its own, at /og/site.jpg
export const GET: APIRoute = async () => {
  const image = await renderCard({
    title: site.headline,
    eyebrow: `${site.name} · Ho Chi Minh City, UTC+7`,
    meta: "React · Next.js · Strapi plugins · 20, 40 or 80 hours a month",
  });
  return new Response(new Uint8Array(image), { headers: { "Content-Type": "image/jpeg" } });
};
