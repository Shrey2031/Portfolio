import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-rose-400"
      >
        $ cd ./this-page
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mt-4 font-display text-6xl md:text-7xl text-fog-100"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-3 font-mono text-sm text-fog-500"
      >
        bash: cd: no such file or directory
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-border px-6 py-3 font-mono text-[13px] text-fog-100 hover:border-amber-400 hover:text-amber-400 transition-colors"
        >
          <FiArrowLeft size={14} />
          cd ~/home
        </Link>
      </motion.div>
    </div>
  );
}
