import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-fog-500) 1px, transparent 1px), linear-gradient(to bottom, var(--color-fog-500) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[110px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-teal-400/10 blur-[110px]"
      />

      {/* Grain texture */}
      <div className="absolute inset-0 grain" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  );
}
