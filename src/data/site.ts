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

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Sass",
  "Ant Design",
  "Storybook",
  "Strapi",
  "REST APIs",
  "Node.js",
  "MongoDB",
  "Git",
];

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
