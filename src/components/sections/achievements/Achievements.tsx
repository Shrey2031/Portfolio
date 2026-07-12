import { motion } from "framer-motion";
import {
  achievementStats,
  hackathons,
  coursework,
  githubUsername,
} from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400"
        >
          $ git log --stat
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl md:text-4xl text-fog-100 max-w-lg text-balance"
        >
          Achievements & ongoing work.
        </motion.h2>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
          {achievementStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-ink-border bg-ink-900/60 p-5 text-center"
            >
              <div className="font-display text-2xl md:text-3xl text-amber-400">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-fog-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Hackathons */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-fog-500">
              Hackathons
            </h3>
            <ul className="mt-4 space-y-3">
              {hackathons.map((h, i) => (
                <motion.li
                  key={h.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between rounded-lg border border-ink-border bg-ink-900/40 px-4 py-3"
                >
                  <span className="text-fog-100 text-sm">{h.name}</span>
                  <span className="font-mono text-[11px] text-teal-400">
                    {h.org}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Coursework */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-fog-500">
              Coursework
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {coursework.map((c) => {
                const ongoing = c.includes("ongoing");
                return (
                  <span
                    key={c}
                    className={`rounded-full border px-3 py-1.5 font-mono text-[12px] ${
                      ongoing
                        ? "border-amber-400/40 text-amber-400"
                        : "border-ink-border text-fog-300"
                    }`}
                  >
                    {c}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* GitHub stats */}
        <div className="mt-14">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-fog-500">
            GitHub activity
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 rounded-xl border border-ink-border bg-ink-900/60 p-4 overflow-x-auto"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=e8a33d&icon_color=45d9c0&text_color=b6b8c2`}
              alt={`${githubUsername}'s GitHub stats`}
              loading="lazy"
              className="w-full max-w-md mx-auto"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=e8a33d&fire=e8a33d&currStreakLabel=45d9c0`}
              alt={`${githubUsername}'s GitHub streak`}
              loading="lazy"
              className="w-full max-w-md mx-auto mt-2"
            />
          </motion.div>
          <p className="mt-2 font-mono text-[11px] text-fog-500">
            live data pulled from github.com/{githubUsername}
          </p>
        </div>
      </div>
    </section>
  );
}
