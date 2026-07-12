import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({
  project,
  onOpenCaseStudy,
}: {
  project: Project;
  onOpenCaseStudy: () => void;
}) {
  const accentText =
    project.accent === "amber" ? "text-amber-400" : "text-teal-400";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className="group rounded-xl border border-ink-border bg-ink-900/60 overflow-hidden hover:border-ink-border/80 hover:-translate-y-1 transition-all duration-300"
    >
      <ProjectCover project={project} />

      <div className="p-6">
        <p className={`font-mono text-[11px] uppercase tracking-wide ${accentText}`}>
          {project.tagline}
        </p>
        <h3 className="mt-2 font-display text-2xl text-fog-100">
          {project.name}
        </h3>
        <p className="mt-3 text-fog-300 text-[14px] leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-border px-2.5 py-1 font-mono text-[11px] text-fog-500"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="rounded-full border border-ink-border px-2.5 py-1 font-mono text-[11px] text-fog-500">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenCaseStudy}
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-fog-100 hover:text-amber-400 transition-colors cursor-pointer"
          >
            Case study
            <FiArrowUpRight size={13} />
          </button>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-fog-300 hover:text-teal-400 transition-colors"
            >
              <FiExternalLink size={13} />
              Live demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-fog-300 hover:text-fog-100 transition-colors"
            >
              <FiGithub size={13} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
