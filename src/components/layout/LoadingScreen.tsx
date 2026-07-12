import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "installing dependencies…",
  "compiling components…",
  "optimizing assets…",
  "build succeeded",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 340);
    return () => clearTimeout(t);
  }, [lineIndex]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ink-950"
        >
          <div className="w-72 font-mono text-sm">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-amber-400 font-display italic text-2xl">
                SK
              </span>
              <span className="text-fog-500">// portfolio.build</span>
            </div>
            <div className="space-y-1.5 min-h-[110px]">
              {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <span
                    className={
                      i === BOOT_LINES.length - 1
                        ? "text-teal-400"
                        : "text-fog-500"
                    }
                  >
                    {i === BOOT_LINES.length - 1 ? "✓" : "›"}
                  </span>
                  <span className="text-fog-300">{line}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 h-[2px] w-full bg-ink-800 overflow-hidden rounded-full">
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: `${(lineIndex / BOOT_LINES.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-amber-400 to-teal-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
