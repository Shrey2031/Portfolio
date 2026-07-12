import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fog-500 hover:text-teal-400 transition-colors"
      aria-label="Scroll to About section"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
        scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="h-8 w-[1.5px] bg-current"
      />
    </motion.a>
  );
}
