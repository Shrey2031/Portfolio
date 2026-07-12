import { FiCode, FiLayers, FiZap, FiTool, FiCpu, FiSearch } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: FiLayers,
    title: "Full-Stack Development",
    description:
      "End-to-end MERN builds — schema design, REST APIs, and the React frontend that consumes them, shipped as one coherent product.",
  },
  {
    icon: FiCode,
    title: "Web Development",
    description:
      "Responsive, fast-loading websites and web apps built with React and Tailwind, from landing pages to full dashboards.",
  },
  {
    icon: FiZap,
    title: "API Development",
    description:
      "REST APIs with proper auth (JWT), role-based access control, and clean, documented endpoints your frontend team can rely on.",
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    description:
      "Adding LLM features the right way — server-side calls, explicit conversation state, no exposed keys — using the Gemini API.",
  },
  {
    icon: FiTool,
    title: "Maintenance & Debugging",
    description:
      "Post-launch support: fixing production bugs, deployment issues, and performance regressions on existing apps.",
  },
  {
    icon: FiSearch,
    title: "SEO Optimization",
    description:
      "Meta tags, semantic structure, and performance tuning so your site actually gets found and loads fast.",
  },
];
