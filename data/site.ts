export type BioSegment = { text: string; accent?: boolean };

export type SkillGroup = {
  label: string;
  items: string[];
};

export const site = {
  url: "https://dhwanishingala.com",
  name: "Dhwanish Singala",
  role: "Software Engineer",
  tagline:
    "Building thoughtful products with clean code and a focus on real-world impact.",
  heroMono: "Software engineer · builder · curious learner",
  email: "hello@dhwanishingala.com",
  social: {
    github: "https://github.com/dhwanishingala",
    linkedin: "https://www.linkedin.com/in/dhwanishingala",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    photo: "/profile.svg",
    photoAlt: "Dhwanish Singala",
    paragraphs: [
      {
        segments: [
          { text: "I'm a " },
          { text: "software engineer", accent: true },
          {
            text: " who enjoys turning fuzzy problems into shippable software—from prototypes to polished user experiences.",
          },
        ],
      },
      {
        segments: [
          { text: "I care about " },
          { text: "clarity in code", accent: true },
          { text: ", accessible interfaces, and tools that save people time. When I'm not coding, you'll find me exploring new tech and side projects." },
        ],
      },
      {
        segments: [
          { text: "Open to " },
          { text: "full-time roles and collaborations", accent: true },
          { text: " where I can learn fast and contribute from day one." },
        ],
      },
    ] as { segments: BioSegment[] }[],
  },
  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      label: "Backend & tools",
      items: ["Node.js", "REST APIs", "Git", "PostgreSQL", "Docker"],
    },
  ] as SkillGroup[],
  footer: {
    note: "Built with care by Dhwanish",
    year: new Date().getFullYear(),
  },
} as const;
