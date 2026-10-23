// Draws a 1200x630 link-preview card for a case study, in the same style as the
// site card (public/og.png): deep ink, a faint grid, brass glow, Unbounded title.
// Runs at build time only, through sharp, which Astro already uses for images.
import { existsSync } from "node:fs";
import { join } from "node:path";
import sharp, { type OverlayOptions } from "sharp";

const W = 1200;
const H = 630;
const INK = "#120e1a";
const TEXT = "#f3efe7";
const MUTED = "#9a8fa8";
const BRASS = "#d9a441";

const fonts = join(process.cwd(), "src/og/fonts");
const FONT = {
  display: { file: join(fonts, "Unbounded-ExtraBold.ttf"), family: "Unbounded" },
  sans: { file: join(fonts, "Inter-Regular.ttf"), family: "Inter" },
  mono: { file: join(fonts, "JetBrainsMono-Medium.ttf"), family: "JetBrains Mono" },
};

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// One block of text as a transparent PNG. Pango measures sizes in points, which
// at the default 72 dpi are pixels. letter_spacing is in 1/1024 of a point.
async function text(
  content: string,
  font: { file: string; family: string },
  size: number,
  colour: string,
  width: number,
  tracking = 0,
) {
  const markup = `<span foreground="${colour}" letter_spacing="${Math.round(tracking * 1024)}">${escape(content)}</span>`;
  const { data, info } = await sharp({
    text: { text: markup, font: `${font.family} ${size}`, fontfile: font.file, width, rgba: true, wrap: "word" },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

const backdrop = (withCover: boolean) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M46 0H0V46" fill="none" stroke="rgba(243,239,231,0.07)" stroke-width="1"/>
      <circle cx="0" cy="0" r="2.5" fill="rgba(217,164,65,0.35)"/>
    </pattern>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="rgba(217,164,65,0.30)"/>
      <stop offset="0.68" stop-color="rgba(217,164,65,0)"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${INK}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <circle cx="${withCover ? 1000 : 1040}" cy="100" r="380" fill="url(#glow)"/>
</svg>`;

export interface Card {
  title: string;
  eyebrow: string;
  meta: string;
  /** Path to the screenshot, if the project has one */
  cover?: string;
}

export async function renderCard({ title, eyebrow, meta, cover }: Card): Promise<Buffer> {
  const withCover = Boolean(cover && existsSync(cover));
  const titleWidth = withCover ? 620 : 1000;

  // The longest titles step down in size until they fit in three lines
  let size = 76;
  let heading = await text(title, FONT.display, size, TEXT, titleWidth, -size * 0.03);
  while (heading.height > 3 * size * 1.25 && size > 48) {
    size -= 6;
    heading = await text(title, FONT.display, size, TEXT, titleWidth, -size * 0.03);
  }

  const kicker = await text(eyebrow.toUpperCase(), FONT.mono, 20, MUTED, 1000, 3);
  const details = await text(meta, FONT.sans, 26, MUTED, titleWidth);
  const site = await text("tungln.is-a.dev", FONT.mono, 22, BRASS, 400);

  const titleTop = 76 + kicker.height + 26;
  const ruleTop = titleTop + heading.height + 30;

  const layers: OverlayOptions[] = [
    { input: kicker.data, left: 80, top: 76 },
    { input: heading.data, left: 80, top: titleTop },
    {
      input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="84" height="4"><rect width="84" height="4" fill="${BRASS}"/></svg>`),
      left: 80,
      top: ruleTop,
    },
    { input: details.data, left: 80, top: H - 76 - site.height - 18 - details.height },
    { input: site.data, left: 80, top: H - 76 - site.height },
  ];

  if (withCover && cover) {
    // The screenshot runs off the right edge, like a frame on a canvas that
    // continues past the viewport. Rounded on the left, with a hairline border.
    const shotW = 620;
    const shotH = 388;
    const visible = W - 760;
    const shot = await sharp(cover)
      .resize(shotW, shotH, { fit: "cover", position: "top" })
      .extract({ left: 0, top: 0, width: visible, height: shotH })
      .composite([
        {
          input: Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${visible}" height="${shotH}"><rect width="${visible + 40}" height="${shotH}" rx="14" fill="#fff"/></svg>`,
          ),
          blend: "dest-in",
        },
        {
          input: Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${visible}" height="${shotH}"><rect x="0.5" y="0.5" width="${visible + 40}" height="${shotH - 1}" rx="14" fill="none" stroke="rgba(243,239,231,0.18)"/></svg>`,
          ),
        },
      ])
      .png()
      .toBuffer();
    layers.push({ input: shot, left: 760, top: 200 });
  }

  return sharp(Buffer.from(backdrop(withCover)))
    .composite(layers)
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
}
