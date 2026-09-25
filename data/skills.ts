export type SkillGroup = {
  label: string;
  items: readonly string[];
};

/** Full resume skill lists (ideation / preview source of truth) */
export const skillGroups: readonly SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Scala",
      "Java",
      "SQL",
      "C/C++",
    ],
  },
  {
    label: "Frameworks",
    items: [
      "Next.js",
      "Node.js",
      "FastAPI",
      "LangGraph",
      "Flask",
      "React",
      "Hadoop",
      "Spark",
      "Kafka",
      "CrewAI",
    ],
  },
  {
    label: "Cloud",
    items: [
      "AWS",
      "EC2",
      "S3",
      "RDS",
      "Bedrock",
      "EMR",
      "Lambda",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "CosmosDB",
      "ChromaDB",
      "Supabase",
    ],
  },
  {
    label: "Tools",
    items: [
      "Claude Code",
      "Cursor",
      "Copilot",
      "Bash",
      "Git",
      "Linux",
      "Grafana",
      "Airflow",
    ],
  },
] as const;

export const FEATURED_SKILLS = new Set([
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "AWS",
  "PostgreSQL",
]);

export function isFeaturedSkill(skill: string): boolean {
  return FEATURED_SKILLS.has(skill);
}

export const MARQUEE_HEADLINE_SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "AWS",
  "PostgreSQL",
  "Node.js",
  "Docker",
  "LangGraph",
  "Git",
] as const;

export const constellationNodes: Array<{
  id: string;
  x: number;
  y: number;
  featured?: boolean;
}> = [
  { id: "TypeScript", x: 50, y: 42, featured: true },
  { id: "React", x: 68, y: 38, featured: true },
  { id: "Next.js", x: 72, y: 52, featured: true },
  { id: "Python", x: 38, y: 48, featured: true },
  { id: "AWS", x: 58, y: 58, featured: true },
  { id: "PostgreSQL", x: 44, y: 62, featured: true },
  { id: "JavaScript", x: 22, y: 35 },
  { id: "Java", x: 18, y: 55 },
  { id: "SQL", x: 28, y: 72 },
  { id: "Node.js", x: 82, y: 28 },
  { id: "Docker", x: 88, y: 48 },
  { id: "Git", x: 75, y: 72 },
  { id: "MongoDB", x: 55, y: 78 },
  { id: "Scala", x: 35, y: 28 },
];

export const constellationEdges: Array<[string, string]> = [
  ["TypeScript", "React"],
  ["React", "Next.js"],
  ["TypeScript", "Python"],
  ["React", "PostgreSQL"],
  ["Next.js", "AWS"],
  ["AWS", "PostgreSQL"],
  ["TypeScript", "JavaScript"],
  ["PostgreSQL", "SQL"],
  ["React", "Node.js"],
  ["AWS", "Docker"],
];
