// Everything shown on the site lives here. Edit this file, rebuild, done.

export const site = {
  name: "Le Nhat Tung",
  role: "Front-end Developer",
  location: "Ho Chi Minh City, Vietnam",
  url: "https://tungln.is-a.dev",
  // Phone number and date of birth are deliberately left out: a public page is
  // scraped within days and those two fields are what scammers actually want.
  email: "nhattung1511@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/finnwasabi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lenhattung/" },
    { label: "Facebook", href: "https://www.facebook.com/finn1511" },
  ],
  // Search results cut off around 155 characters; the long intro is for the page itself
  metaDescription:
    "Front-end developer in Ho Chi Minh City. Four years building production interfaces with React, Next.js and Refine, plus seven Strapi plugins on npm.",
  intro:
    "I build web interfaces that hold up in production. Four years spent turning Figma files into fast, accessible, maintainable front-ends for booking platforms, e-commerce and enterprise products.",
};

export const focus = [
  {
    title: "Interface implementation",
    body: "Pixel-accurate builds from Figma, including the states designers forget: loading, empty, error, and every breakpoint in between.",
  },
  {
    title: "Performance and SEO",
    body: "Server rendering, image pipelines and Core Web Vitals work. Pages that load fast on a mid-range Android over 4G, not just on your laptop.",
  },
  {
    title: "Design systems",
    body: "Reusable component libraries documented in Storybook, so a team of five ships consistent UI without a meeting for every button.",
  },
];

export const skills: { name: string; icon?: string }[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Refine", icon: "refine" },
  { name: "Vite", icon: "vite" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Ant Design", icon: "antdesign" },
  { name: "shadcn/ui", icon: "shadcnui" },
  { name: "Sass", icon: "sass" },
  { name: "Storybook", icon: "storybook" },
  { name: "Testing Library", icon: "testinglibrary" },
  { name: "TanStack Query", icon: "reactquery" },
  { name: "Strapi", icon: "strapi" },
  { name: "Directus", icon: "directus" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "GitLab CI", icon: "gitlab" },
  { name: "Git", icon: "git" },
  { name: "REST APIs" },
];

// Running my own server is where I learn the things a ticket never teaches.
// Deliberately vague about hostnames: this is a story, not an invitation.
export const homelab = {
  title: "Outside the browser",
  body: "I run my own server, and most of what I know about the layer under the front-end I learned by breaking it. Thirteen containers behind a reverse proxy, network-wide ad filtering, uptime monitoring that pings my phone, an intrusion filter that once banned me from my own machine, and a Telegram bot to run the whole thing from bed.",
  stats: [
    ["13", "containers"],
    ["24/7", "uptime monitored"],
    ["35%", "of DNS queries blocked"],
    ["0", "clicks to deploy"],
  ] as [string, string][],
};

// Strapi plugins published to npm under the @tunghtml scope. Download counts are
// fetched at build time, so the page never calls npm in the browser.
export const packages = [
  {
    name: "composite-field",
    blurb: "Builds a display value out of several text fields, and keeps manual edits safe.",
  },
  {
    name: "section-divider",
    blurb: "Breaks a long content-type form into readable groups.",
  },
  {
    name: "multiselect-checkbox",
    blurb: "Multi-select that stores a JSON array instead of a comma-separated string.",
  },
  {
    name: "filtered-relation",
    blurb: "Filtered relation field with dynamic placeholders and inline status changes.",
  },
  {
    name: "export-import-clsx",
    blurb: "Content export and import with Excel support and filtering.",
  },
  {
    name: "dynamic-enum",
    blurb: "Enum field editors can extend themselves, without waiting on a schema change.",
  },
  {
    name: "time-slot-picker",
    blurb: "Picks time slots across several dates.",
  },
];

export const experience = [
  {
    company: "GEEK Up",
    role: "Front-end Developer",
    period: "Mar 2025 — Present",
    points: [
      "Front-end delivery at a product partner that takes clients from strategy and design through to shipped software, across finance, healthcare and enterprise operations.",
      "Shipped two products for HSC, a listed securities firm: its bilingual public site, editable end to end by the communications team, and the platform behind its annual investment conference, where I also rebuilt the meeting-matching engine on the back end.",
      "Wrote the front-end standards and quality gates now used as the baseline on client projects.",
      "Built and maintained a shared component library documented in Storybook so parallel teams ship consistent UI.",
      "Reviewed designs before implementation to surface missing states and edge cases while they were still cheap to fix.",
    ],
  },
  {
    company: "Wiicamp",
    role: "Front-end Developer",
    period: "Jul 2022 — Mar 2025",
    points: [
      "Worked alongside UI/UX designers to implement interface components from Figma.",
      "Applied SEO techniques that improved search visibility for client sites.",
      "Ran cross-code reviews to keep the codebase consistent across the team.",
      "Estimated and tracked own work to keep delivery on schedule.",
    ],
  },
  {
    company: "Tie Commerce",
    role: "Graphic Designer",
    period: "Nov 2020 — Jun 2022",
    points: [
      "Print-on-demand design: artwork for apparel and merchandise sold through international marketplaces.",
      "The press sets the constraints, not the screen. Resolution, colour separation and the printable area decide what a design can be before taste gets a say, and a file that ignores them comes back as a refund rather than a revision.",
      "Worked in a small design team and took briefs straight from clients at home and overseas, which is where I learned to ask what a request is for before opening the file.",
      "This is where the eye came from. Spacing, hierarchy and type were the job before they were the tooling. The last eight months of it ran alongside my final year at university.",
    ],
  },
];

// Newest first, same as the roles above
export const education = [
  {
    school: "Duy Tan University",
    major: "Bachelor's degree, Computer Science",
    period: "2019 — Jul 2021",
  },
  {
    school: "Da Nang University of Science and Technology",
    major: "Mechatronics Engineering",
    period: "2017 — 2019",
  },
];
