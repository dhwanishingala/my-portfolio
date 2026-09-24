export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  hook: string;
  summary: string;
  longDescription?: string;
  outcome?: string;
  categories: string[];
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
};

/** Copy this object in the array below when adding a new featured project. */
export const projectTemplate: Omit<Project, "slug"> & { slug: "your-project-slug" } =
  {
    slug: "your-project-slug",
    title: "Project name",
    year: "2026",
    role: "Your role",
    hook: "One-line hook with outcome.",
    summary: "2–4 sentences: problem, what you did, result.",
    longDescription: "Optional longer blurb for the expand modal.",
    outcome: "Optional metric, e.g. cut build time 40%",
    categories: ["CATEGORY · TAG"],
    stack: ["React", "TypeScript"],
    repoUrl: "https://github.com/dhwanishingala/your-repo",
    liveUrl: "https://your-demo.example.com",
    image: "/projects/placeholder.svg",
  };

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Personal Portfolio",
    year: "2026",
    role: "Design & development",
    hook: "Single-page portfolio with structured content and deploy-ready UX.",
    summary:
      "Designed and built a performant portfolio with in-page resume viewing, accessible navigation, and a content layer that keeps projects easy to update.",
    longDescription:
      "Implemented Option A content files, terracotta/beige/powder-blue visual system, custom cursor on desktop, and contact form integration—optimized for recruiters on mobile and desktop.",
    outcome: "Ship-ready on Vercel with custom domain support",
    categories: ["WEB · NEXT.JS"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/dhwanishingala/my-portfolio",
    image: "/projects/portfolio.svg",
  },
  {
    slug: "task-flow",
    title: "Task Flow",
    year: "2025",
    role: "Full-stack developer",
    hook: "Lightweight task manager with filters and persistent local state.",
    summary:
      "Built a React app for organizing daily work with tags, priorities, and keyboard-friendly controls—focused on speed and minimal friction.",
    longDescription:
      "Structured state with TypeScript, component tests for core flows, and responsive layout for phone-first usage.",
    categories: ["PRODUCTIVITY · REACT"],
    stack: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/dhwanishingala/task-flow",
    liveUrl: "https://example.com",
    image: "/projects/task-flow.svg",
  },
  {
    slug: "api-starter",
    title: "API Starter Kit",
    year: "2025",
    role: "Backend engineer",
    hook: "REST API template with auth middleware and OpenAPI docs.",
    summary:
      "Created a Node/Express starter with JWT auth, validation, and documented routes so new services spin up in hours instead of days.",
    outcome: "Reduced new service bootstrap time for side projects",
    categories: ["BACKEND · NODE"],
    stack: ["Node.js", "Express", "PostgreSQL"],
    repoUrl: "https://github.com/dhwanishingala/api-starter",
    image: "/projects/api-starter.svg",
  },
  {
    slug: "data-viz-dash",
    title: "Insights Dashboard",
    year: "2024",
    role: "Frontend developer",
    hook: "Interactive charts for exploring sample analytics datasets.",
    summary:
      "Delivered a dashboard with filterable views and accessible chart components, emphasizing readable typography and WCAG-friendly color contrast on a light theme.",
    categories: ["DATA · VISUALIZATION"],
    stack: ["React", "D3", "Tailwind CSS"],
    repoUrl: "https://github.com/dhwanishingala/data-viz-dash",
    image: "/projects/data-viz.svg",
  },
];
