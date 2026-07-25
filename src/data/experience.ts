export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: string;
}

export const experience: ExperienceEntry[] = [
{
    id: "xeloniq",
    role: "Full-Stack Developer (Freelance)",
    company: "Xeloniq",
    period: "2026 — Present",
    type: "Freelance",
    summary:
      "Xeloniq is a digital solutions company helping businesses — shops, cafés, restaurants — get online with domains, hosting, business email, cloud solutions, and custom web development. I work as a full-stack developer on their small team, building and deploying client-facing web applications.",
    highlights: [
      "Design, build, and deploy full-stack web applications end-to-end for client projects",
      "Work directly with clients to scope features and make architecture decisions",
      "Contributed to the company's own site, hosting portal, and service infrastructure",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloud Hosting"],
    link: "https://www.xeloniq.com",
  },
  {
    id: "zyngate",
    role: "Full-Stack Development Intern",
    company: "Zyngate",
    period: "2 months",
    type: "Internship",
    summary:
      "Worked on Stelle Chat, a web application, focused on frontend responsiveness and connecting the UI to real backend data instead of static mockups.",
    highlights: [
      "Rebuilt mobile responsiveness across the app using React and Tailwind CSS",
      "Built out user profile pages from scratch",
      "Wrote and integrated GET/PUT API calls to fetch and edit user details",
    ],
    stack: ["React", "Tailwind CSS", "REST APIs"],
  },
];
