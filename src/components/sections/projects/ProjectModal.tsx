import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-ink-border bg-ink-950"
          >
            <ProjectCover project={project} />

            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close case study"
              className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full bg-ink-950/80 border border-ink-border text-fog-100 hover:text-amber-400 hover:border-amber-400/50 transition-colors cursor-pointer"
            >
              <FiX size={16} />
            </button>

            <div className="p-6 md:p-8">
              <p
                className={`font-mono text-[11px] uppercase tracking-wide ${
                  project.accent === "amber" ? "text-amber-400" : "text-teal-400"
                }`}
              >
                {project.tagline}
              </p>
              <h2
                id="project-modal-title"
                className="mt-2 font-display text-3xl text-fog-100"
              >
                {project.name}
              </h2>
              <p className="mt-4 text-fog-300 text-[15px] leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink-border px-2.5 py-1 font-mono text-[11px] text-fog-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Section title="Architecture">
                <p className="text-fog-300 text-sm leading-relaxed">
                  {project.architecture}
                </p>
              </Section>

              <Section title="Key features">
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-fog-300">
                      <span className="text-teal-400 mt-0.5">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="My contribution">
                <p className="text-fog-300 text-sm leading-relaxed">
                  {project.contribution}
                </p>
              </Section>

              <Section title="Challenges & fixes">
                <div className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-ink-border bg-ink-900/50 p-4"
                    >
                      <p className="font-mono text-[11px] text-rose-400">
                        problem
                      </p>
                      <p className="mt-1 text-sm text-fog-300">{c.problem}</p>
                      <p className="mt-3 font-mono text-[11px] text-teal-400">
                        fix
                      </p>
                      <p className="mt-1 text-sm text-fog-300">{c.solution}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Future improvements">
                <ul className="space-y-2">
                  {project.futureImprovements.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-fog-300">
                      <span className="text-amber-400 mt-0.5">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-ink-border pt-6">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 font-mono text-[13px] font-medium text-ink-950 hover:bg-amber-300 transition-colors"
                  >
                    <FiExternalLink size={14} />
                    Live demo
                  </a>
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink-border px-5 py-2.5 font-mono text-[13px] text-fog-100 hover:border-teal-400 hover:text-teal-400 transition-colors"
                  >
                    <FiGithub size={14} />
                    View code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-border px-5 py-2.5 font-mono text-[13px] text-fog-500">
                    <FiGithub size={14} />
                    Repo private
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-fog-500">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
