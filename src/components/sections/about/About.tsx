import { useState } from "react";
import { motion } from "framer-motion";
import { aboutIntro, education, timeline, strengths } from "@/data/about";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  const [imgError, setImgError] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          {/* Left: intro + education card, sticky on desktop */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-40 md:w-48 rounded-xl border border-ink-border overflow-hidden bg-ink-900"
            >
              {imgError ? (
                <div className="w-full aspect-[4/5] grid place-items-center bg-ink-850">
                  <span className="font-display italic text-4xl text-amber-400">
                    {initials}
                  </span>
                </div>
              ) : (
                <img
                  src="/images/shreya_img.png"
                  alt="Shreya Kumari"
                  onError={() => setImgError(true)}
                  className="w-full aspect-[4/5] object-cover  hover:grayscale-0 transition-all duration-500"
                />
              )}
              <span className="absolute bottom-2 left-2 rounded bg-ink-950/80 px-2 py-0.5 font-mono text-[10px] text-fog-500">
                profile.jpg
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400"
            >
              {aboutIntro.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 font-display text-3xl md:text-4xl text-fog-100 text-balance"
            >
              {aboutIntro.heading}
            </motion.h2>

            <div className="mt-6 space-y-4">
              {aboutIntro.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="text-fog-300 text-[15px] leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 rounded-xl border border-ink-border bg-ink-900/60 p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-wide text-fog-500">
                Education
              </p>
              <p className="mt-2 font-display text-lg text-fog-100">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-fog-300">{education.school}</p>
              <div className="mt-3 flex items-center justify-between font-mono text-[12px] text-fog-500">
                <span>{education.period}</span>
                <span className="text-amber-400">{education.detail}</span>
              </div>
            </motion.div>
          </div>

          {/* Right: timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-border" />
            <ul className="space-y-10">
              {timeline.map((entry, i) => (
                <motion.li
                  key={entry.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-8"
                >
                  <span
                    className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                      entry.date === "Now"
                        ? "bg-amber-400 border-amber-400"
                        : "bg-ink-950 border-teal-400"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[12px] text-fog-500">
                      {entry.id}
                    </span>
                    <span className="font-mono text-[11px] text-teal-400">
                      {entry.date}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-xl text-fog-100">
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 text-fog-300 text-sm leading-relaxed max-w-md">
                    {entry.detail}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Strengths grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-16 grid sm:grid-cols-2 gap-4"
            >
              {strengths.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-ink-border bg-ink-900/40 p-5 hover:border-amber-400/40 transition-colors"
                >
                  <h4 className="font-display text-base text-fog-100">
                    {s.title}
                  </h4>
                  <p className="mt-1.5 text-fog-500 text-[13px] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
