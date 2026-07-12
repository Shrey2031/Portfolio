import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-ink-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400"
        >
          $ cat experience.log
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl md:text-4xl text-fog-100 max-w-lg text-balance"
        >
          Where I've worked.
        </motion.h2>

        <div className="mt-12 space-y-6">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-ink-border bg-ink-900/60 p-6 md:p-8 hover:border-amber-400/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-amber-400">
                    {entry.type}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl text-fog-100">
                    {entry.role}
                  </h3>
                  {entry.link ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-fog-300 hover:text-teal-400 text-sm transition-colors"
                    >
                      {entry.company}
                      <FiExternalLink size={12} />
                    </a>
                  ) : (
                    <p className="mt-1 text-fog-300 text-sm">{entry.company}</p>
                  )}
                </div>
                <span className="font-mono text-[12px] text-fog-500 border border-ink-border rounded-full px-3 py-1">
                  {entry.period}
                </span>
              </div>

              <p className="mt-4 text-fog-300 text-[14px] leading-relaxed max-w-2xl">
                {entry.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {entry.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-fog-300">
                    <span className="text-teal-400 mt-0.5">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink-border px-2.5 py-1 font-mono text-[11px] text-fog-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
