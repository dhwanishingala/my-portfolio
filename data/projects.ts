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
    slug: "cs553-distributing-algorithms",
    title: "CS553-DistributingAlgorithms",
    year: "2025",
    role: "Distributed systems · course project",
    hook:
      "Simulation of distributed computing algorithms in Scala using Akka.",
    summary:
      "Implemented automated simulations of message-passing and shared-memory distributed algorithms driven by JSON simulation plans. Integrated Lightbend Telemetry with Prometheus and Grafana for performance monitoring, plus unit and integration tests across election, routing, and mutex scenarios.",
    categories: ["DISTRIBUTED SYSTEMS · AKKA"],
    stack: ["Scala", "Akka", "sbt", "Lightbend Telemetry"],
    repoUrl: "https://github.com/Kaushal1011/CS553-DistributingAlgorithms",
    image: "/projects/distributed-systems.svg",
  },
  {
    slug: "cs418-crime-root-detectives",
    title: "CS418-Crime-Root-Detectives",
    year: "2025",
    role: "Data analysis · course project",
    hook: "Analysis of factors contributing to crime in a given area.",
    summary:
      "Explored why crime clusters where it does by analyzing public datasets on arrests, schools, and local business patterns in Jupyter notebooks. Built EDA workflows to surface neighborhood-level factors associated with crime occurrence.",
    categories: ["DATA SCIENCE · EDA"],
    stack: ["Python", "Jupyter", "pandas"],
    repoUrl: "https://github.com/AayushG159/CS418-Crime-Root-Detectives",
    image: "/projects/crime-analysis.svg",
  },
];
