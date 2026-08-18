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
    { label: "GitHub", href: "https://github.com/tunglenhat" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lenhattung/" },
    { label: "Facebook", href: "https://www.facebook.com/finn1511" },
  ],
  intro:
    "I build web interfaces that hold up in production. Four and a half years spent turning Figma files into fast, accessible, maintainable front-ends for booking platforms, e-commerce and enterprise products.",
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
  { name: "Vite", icon: "vite" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "shadcn/ui", icon: "shadcnui" },
  { name: "Sass", icon: "sass" },
  { name: "Ant Design", icon: "antdesign" },
  { name: "Storybook", icon: "storybook" },
  { name: "Strapi", icon: "strapi" },
  { name: "Directus", icon: "directus" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "MongoDB", icon: "mongodb" },
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

export const experience = [
  {
    company: "GEEK Up",
    role: "Front-end Developer",
    period: "Mar 2025 — Present",
    points: [
      "Front-end delivery at a product partner that takes clients from strategy and design through to shipped software, across finance, healthcare and enterprise operations.",
      "Wrote the front-end standards and quality gates now used as the baseline on client projects.",
      "Built and maintained a shared component library documented in Storybook so parallel teams ship consistent UI.",
      "Reviewed designs before implementation to surface missing states and edge cases while they were still cheap to fix.",
    ],
  },
  {
    company: "Wiicamp",
    role: "Front-end Developer",
    period: "Feb 2022 — Mar 2025",
    points: [
      "Worked alongside UI/UX designers to implement interface components from Figma.",
      "Applied SEO techniques that improved search visibility for client sites.",
      "Ran cross-code reviews to keep the codebase consistent across the team.",
      "Estimated and tracked own work to keep delivery on schedule.",
    ],
  },
];

export const education = {
  school: "Da Nang University of Science and Technology",
  major: "Electronics and Telecommunication",
  period: "2017 — 2022",
};
