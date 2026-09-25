export type Experience = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  summary: string;
  highlights: string[];
};

/** Copy this object when adding a past role. */
export const experienceTemplate: Experience = {
  company: "Company name",
  title: "Your title",
  dates: "2024 – Present",
  location: "City, ST",
  summary: "One or two sentences on scope and impact.",
  highlights: [
    "Outcome-focused bullet (metrics if you have them)",
    "Another bullet on systems, stack, or collaboration",
  ],
};

export const experience: Experience[] = [
  {
    company: "UI Health",
    title: "Software Engineer I",
    dates: "June 2024 – Present",
    location: "Chicago, IL",
    summary:
      "I build production software for clinical research teams—owning features and turning stakeholder needs into the interface, API, and data layer.",
    highlights: [
      "Designed and built Lumen, a multi-agent therapy platform with real-time speech and supervisor-to-specialist routing, cutting task latency by 40% and supporting live sessions for 200+ users.",
      "Designed and implemented a HIPAA-compliant clinical system end to end—from the interface through JWT-authenticated APIs, PostgreSQL, and audit logging on AWS.",
      "Shipped an end-to-end clinical reporting system used by Stanford clinical staff and the UIC clinical team, replacing hours of manual report work so the full clinical staff can generate reports the same day.",
    ],
  },
];
