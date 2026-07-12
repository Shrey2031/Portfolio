import { motion, type Variants } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { profile, stats } from "@/data/profile";
import { HeroBackground } from "./HeroBackground";
import { TerminalWindow } from "./TerminalWindow";
import { ScrollIndicator } from "./ScrollIndicator";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SocialLinks } from "@/components/ui/SocialLinks";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16"
    >
      <HeroBackground />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center"
        >
          {/* Left column */}
          <div>
            <motion.div variants={item}>
              <StatusBadge label={profile.availability} tone="teal" />
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.05] text-fog-100 text-balance"
            >
              Building software
              <br />
              that <span className="italic text-amber-400">ships</span>,
              <br />
              not just <span className="italic">demos</span>.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-fog-300 text-[15px] leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-mono text-[13px] font-medium text-ink-950 hover:bg-amber-300 transition-colors"
              >
                <FiDownload size={14} />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-border px-6 py-3 font-mono text-[13px] text-fog-100 hover:border-teal-400 hover:text-teal-400 transition-colors"
              >
                Get in touch
                <FiArrowUpRight size={14} />
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10">
              <SocialLinks />
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-12 grid grid-cols-4 gap-4 max-w-md border-t border-ink-border pt-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-wide text-fog-500">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl text-fog-100">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right column — signature terminal */}
          <motion.div
            variants={item}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TerminalWindow />
            </motion.div>

            {/* Floating deploy badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden sm:block"
            >
              <StatusBadge label="deployed on render" tone="amber" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
