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
    role: "Lead Full-Stack Developer",
    company: "Xeloniq",
    period: "2026 — Present",
    type: "Leadership",
    summary:
      "Xeloniq is a digital solutions company we launched to help businesses — shops, cafés, restaurants — get online with domains, hosting, business email, cloud solutions, and custom web development. I lead the full-stack development team.",
    highlights: [
      "Leading the full-stack development team from architecture to deployment",
      "Own the technical direction for client-facing web development services",
      "Shipped the company's own site, hosting portal, and service infrastructure",
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
