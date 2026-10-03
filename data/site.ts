export type BioSegment = { text: string; accent?: boolean };

export const site = {
  url: "https://dhwanishingala.com",
  name: "Dhwani Shingala",
  role: "Software Engineer @ UI Health",
  tagline:
    "Building thoughtful products with clean code and a focus on real-world impact.",
  heroMono: "Software engineer · builder · curious learner",
  email: "dshingala19@gmail.com",
  social: {
    github: "https://github.com/dhwanishingala",
    linkedin: "https://www.linkedin.com/in/dhwanishingala",
    instagram: "https://www.instagram.com/_dhwanishingala_/",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Arsenal", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    photo: "/profile-hero.jpg",
    photoAlt: "Dhwani Shingala",
    photoWidth: 1024,
    photoHeight: 912,
    paragraphs: [
      {
        segments: [
          { text: "I'm a " },
          { text: "software engineer", accent: true },
          {
            text: " who loves coding—turning a fuzzy problem into something clear to use and clear to maintain.",
          },
        ],
      },
      {
        segments: [
          { text: "I'm also a " },
          { text: "foodie", accent: true },
          {
            text: ". I love hikes, weird exercise classes, and pretty much any excuse to move. Games too—screen or board, I'll play.",
          },
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
  footer: {
    note: "Built with care by Dhwani",
    year: new Date().getFullYear(),
  },
} as const;
