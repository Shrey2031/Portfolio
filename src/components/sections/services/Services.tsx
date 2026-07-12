import { motion } from "framer-motion";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-ink-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400"
        >
          $ cat services.md
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl md:text-4xl text-fog-100 max-w-lg text-balance"
        >
          What I can build for you.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-fog-300 text-sm max-w-lg"
        >
          For teams hiring, and for clients who need something built.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-xl border border-ink-border bg-ink-900/60 p-6 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-ink-950 transition-colors">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-lg text-fog-100">
                {title}
              </h3>
              <p className="mt-2 text-fog-500 text-[13px] leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
