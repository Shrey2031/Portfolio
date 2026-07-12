import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { TierDots } from "@/components/ui/TierDots";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-ink-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400"
        >
          $ cat skills.json
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl md:text-4xl text-fog-100 max-w-lg text-balance"
        >
          The stack I actually ship with.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-fog-500 text-sm font-mono"
        >
          dots indicate depth, not decoration — ●●● strong · ●●○ comfortable · ●○○ learning
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (ci % 3) * 0.08 }}
              className="rounded-xl border border-ink-border bg-ink-900/60 p-6 hover:border-teal-400/40 transition-colors"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-wide text-amber-400">
                {String(ci + 1).padStart(2, "0")} · {cat.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-fog-100 text-sm">{skill.name}</span>
                    <TierDots tier={skill.tier} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
