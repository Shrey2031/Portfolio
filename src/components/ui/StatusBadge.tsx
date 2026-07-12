interface Props {
  label: string;
  tone?: "amber" | "teal";
}

export function StatusBadge({ label, tone = "teal" }: Props) {
  const dot = tone === "teal" ? "bg-teal-400" : "bg-amber-400";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-900/60 px-3 py-1.5 font-mono text-[11px] text-fog-300">
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-60`}
        />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
      </span>
      {label}
    </span>
  );
}
