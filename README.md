# tungln.is-a.dev

My portfolio: five case studies about interfaces I have shipped, and how they were built.

**Live:** https://tungln.is-a.dev

## Why Astro and not Next.js

I use React and Next.js daily at work, so the obvious move was to reach for them here too.
I did not, because this is a content site: six pages, no server-side session, no data that
changes between deploys. Next.js earns its weight when there is a runtime to justify it. Here
it would have meant either keeping a Node process alive on my server, or exporting static
files anyway.

What that decision bought:

| | |
|---|---|
| Total build output | 84 KB before images |
| Home page, compressed | 6.2 KB |
| JavaScript shipped | ~2 KB, only for the hero interaction |
| Server memory | 0 MB. Caddy reads the files off disk |

The screenshots go through Astro's image pipeline and come out as WebP, which takes the
largest one from 952 KB down to 34 KB.

## Stack

- **Astro 5** for static output and content collections
- **TypeScript** throughout, with a Zod schema validating every case study's frontmatter, so a
  typo in a field name fails the build instead of rendering an empty page
- **Tailwind CSS 4** with a token layer, so the whole palette is a handful of custom properties
- **Fontsource** to self-host Syne, Inter and JetBrains Mono rather than depend on a font CDN

## The hero

The header behaves like an artboard. Hovering an element selects it and shows its layer name
and pixel dimensions, next to a properties panel. It is a small joke about what the job
actually is: reading a design file and rebuilding it in a browser. It only activates on
devices that report `hover: hover`, and it respects `prefers-reduced-motion`.

## Structure

```
src/
  data/site.ts          Name, intro, experience, skills. Most edits happen here
  content/work/*.md     One file per case study, ordered by the `order` field
  components/           Hero, work card
  pages/                Home, and one generated page per case study
  assets/work/*.png     Screenshots, matched to a case study by filename
```

Adding a project means dropping a markdown file in `content/work/` and, if the site is still
up, a screenshot named after it. Nothing else to wire up.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
```

## Deployment

Pushing to `main` triggers a build in GitHub Actions, which rsyncs `dist/` to my own server,
where Caddy serves it over HTTP/3 with zstd compression and a one-year cache on hashed assets.

The deploy key is restricted server-side with `rrsync` to write-only access to a single
directory, so a leaked CI secret cannot become shell access.
