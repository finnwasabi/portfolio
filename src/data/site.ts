// Everything shown on the site lives here. Edit this file, rebuild, done.

export const site = {
  name: "Le Nhat Tung",
  role: "Frontend & Strapi plugin developer",
  // The positioning line under the name, and the home page title
  headline: "Frontend & Strapi plugin developer for monthly retainers",
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
    "Frontend and Strapi plugin developer on monthly retainer. React, Next.js and seven open-source Strapi plugins. Ho Chi Minh City, UTC+7.",
  // Flip `open` to show an "Open to work" badge in the header; `label` is what it says.
  availability: { open: false, label: "Open to work" },
  // Drop a PDF in public/ and set its path (e.g. "/le-nhat-tung-cv.pdf") to show a
  // download button in the hero and the contact card. Empty hides both.
  cv: "",
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
    period: "Mar 2025 - Present",
    points: [
      "Front-end delivery at a product partner that takes clients from strategy and design through to shipped software, across finance, healthcare and enterprise operations.",
      "Shipped two products for one of Vietnam's largest brokerages: its bilingual public site, editable end to end by the communications team, and the platform behind its annual investment conference, where I also rebuilt the meeting-matching engine on the back end.",
      "Wrote the front-end standards and quality gates now used as the baseline on client projects.",
      "Built and maintained a shared component library documented in Storybook so parallel teams ship consistent UI.",
      "Reviewed designs before implementation to surface missing states and edge cases while they were still cheap to fix.",
    ],
  },
  {
    company: "Wiicamp",
    role: "Front-end Developer",
    period: "Jul 2022 - Mar 2025",
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
    period: "Nov 2020 - Jun 2022",
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
    period: "2019 - Jul 2021",
  },
  {
    school: "Da Nang University of Science and Technology",
    major: "Mechatronics Engineering",
    period: "2017 - 2019",
  },
];

// Monthly retainers, the "Work with me" section and the JSON-LD offers both read
// from here. Prices in USD, billed at the start of the month.
export const retainer = {
  plans: [
    { hours: 20, price: 800 },
    { hours: 40, price: 1500 },
    { hours: 80, price: 2800 },
  ],
  included: [
    "Frontend work: React and Next.js, Figma to code, design systems in Storybook, performance and SEO",
    "Strapi plugin development and CMS integration",
    "A reply within 1 business day",
    "A written progress note every week",
  ],
  terms: [
    "3-month minimum, then 30 days' notice to stop.",
    "Unused hours roll over for one month, up to 10 hours.",
    "Extra work is billed at the same hourly rate as your plan.",
    "Billed in USD at the start of each month.",
  ],
  availability: "Open for new retainer clients",
  timezone:
    "Based in Ho Chi Minh City (UTC+7), good overlap with Australia and Europe mornings",
  inquiry: {
    subject: "Retainer inquiry",
    body: "Hi Tung,\n\nTeam size:\nStack:\nHours per month (20, 40 or 80):\n\nWhat we are working on:\n",
  },
};

// The three case studies summarised on the home page. Every line here restates
// something the full case study already says; no new claims, no new numbers.
export const highlights = [
  {
    slug: "emerging-vietnam",
    context: "International investment conference",
    problem:
      "Hundreds of fund managers and listed companies register, then need a grid of one-to-one meetings where nobody is in two rooms at once, and a check-in that clears before the first session.",
    did: "Built the registration journeys, accounts, agenda and scannable tickets, then rebuilt the meeting-matching engine on direct SQL with batched writes after the first version exhausted the database connection pool. The platform runs on five of my own Strapi plugins.",
    result:
      "Slot assignment that used to block the public site now finishes in one pass. The organisers run registration, matching and check-in from the admin panel without a developer on standby.",
  },
  {
    slug: "multibank-info",
    context: "Banking dashboard, Netherlands",
    problem:
      "Someone with accounts at five banks has five logins and no single view of what they own.",
    did: "Built the React and TypeScript dashboard: live charts, linking several bank accounts, balances, investment plans and transaction history, consolidated or per account. Typed end to end, because every number on that screen is someone's money.",
    result:
      "No headline metric. The dashboard became the piece all six people on the team built against, sharing one set of types.",
  },
  {
    slug: "bookese",
    context: "Accommodation booking platform",
    problem:
      "A guest's dates and budget have to survive every screen while availability changes underneath, or they lose their search halfway through checkout.",
    did: "Built the interface from Figma and wired it to the back end: accounts, room availability, reviews, and a third-party payment step that survives a closed tab, a double payment or a stale price.",
    result:
      "Not measured in numbers. The booking flow is still in production and still growing, and eight people could work on it at once.",
  },
];

// What colleagues and clients have said. Real quotes only, with permission, and
// the section stays off the page until there is at least one. Keep each to two
// or three sentences; `href` can point at the person's LinkedIn.
// TODO(testimonials): add real quotes here once a client agrees to be quoted.
// The section renders on its own as soon as this array is not empty.
export const testimonials: { quote: string; name: string; role: string; href?: string }[] = [];
