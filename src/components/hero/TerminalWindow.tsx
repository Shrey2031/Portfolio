import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { terminalCommands } from "@/data/profile";

function CommandBlock({
  command,
  output,
  active,
  onDone,
}: {
  command: string;
  output: string[];
  active: boolean;
  onDone: () => void;
}) {
  const { text, done } = useTypewriter(command, { speed: 38, active });
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setShowOutput(true), 200);
    return () => clearTimeout(t);
  }, [done]);

  useEffect(() => {
    if (!showOutput) return;
    const t = setTimeout(onDone, output.length * 140 + 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showOutput]);

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span className="text-teal-400">➜</span>
        <span className="text-amber-300">~/portfolio</span>
        <span className="text-fog-100">{text}</span>
        {active && !done && (
          <span className="inline-block h-4 w-[7px] bg-fog-100 animate-blink" />
        )}
      </div>
      {showOutput && (
        <div className="mt-1.5 pl-5 space-y-1">
          {output.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.14 }}
              className="text-fog-300"
            >
              {line}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export function TerminalWindow() {
  const [stage, setStage] = useState(0);

  return (
    <div className="relative rounded-xl border border-ink-border bg-ink-900/80 backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-ink-border bg-ink-850 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-400/80" />
        <span className="ml-3 font-mono text-[11px] text-fog-500">
          shreya@portfolio: ~
        </span>
      </div>

      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[220px]">
        {terminalCommands.map((cmd, i) => {
          if (i > stage) return null;
          return (
            <CommandBlock
              key={cmd.command}
              command={cmd.command}
              output={cmd.output}
              active={i === stage}
              onDone={() => setStage((s) => Math.max(s, i + 1))}
            />
          );
        })}
      </div>
    </div>
  );
}
