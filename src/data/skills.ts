export type Tier = "strong" | "comfortable" | "learning";

export interface Skill {
  name: string;
  tier: Tier;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", tier: "strong" },
      { name: "Tailwind CSS", tier: "strong" },
      { name: "Framer Motion", tier: "comfortable" },
      { name: "Context API / Redux", tier: "comfortable" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", tier: "strong" },
      { name: "Express.js", tier: "strong" },
      { name: "REST API design", tier: "strong" },
      { name: "Socket.IO", tier: "comfortable" },
      { name: "JWT auth & RBAC", tier: "comfortable" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MongoDB", tier: "strong" },
      { name: "Mongoose", tier: "strong" },
      { name: "SQL basics", tier: "learning" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", tier: "strong" },
      { name: "TypeScript", tier: "comfortable" },
      { name: "C++", tier: "comfortable" },
      { name: "Python", tier: "learning" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git & GitHub", tier: "strong" },
      { name: "Postman", tier: "strong" },
      { name: "VS Code", tier: "strong" },
      { name: "Figma", tier: "learning" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Deploy",
    skills: [
      { name: "Render", tier: "comfortable" },
      { name: "Vercel", tier: "comfortable" },
      { name: "Cloudinary", tier: "comfortable" },
    ],
  },
  {
    id: "ai",
    label: "AI Integration",
    skills: [
      { name: "Gemini API", tier: "comfortable" },
      { name: "LLM app architecture", tier: "comfortable" },
      { name: "Prompt engineering", tier: "comfortable" },
    ],
  },
];

export const tierMeta: Record<Tier, { label: string; dots: number }> = {
  strong: { label: "Strong", dots: 3 },
  comfortable: { label: "Comfortable", dots: 2 },
  learning: { label: "Learning", dots: 1 },
};
