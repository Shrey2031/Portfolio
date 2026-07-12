import type { Project } from "@/data/projects";

const glyphs: Record<string, string> = {
  campushub: "M4 17V7l8-4 8 4v10l-8 4-8-4Z M4 7l8 4 8-4 M12 11v10",
  "health-records": "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z M9 11h6 M12 8v6",
};

export function ProjectCover({ project }: { project: Project }) {
  const isAmber = project.accent === "amber";
  return (
    <div
      className={`relative h-48 overflow-hidden rounded-t-xl border-b border-ink-border ${
        isAmber ? "bg-amber-400/[0.06]" : "bg-teal-400/[0.06]"
      }`}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: isAmber ? "var(--color-amber-400)" : "var(--color-teal-400)",
        }}
      />
      {/* Glow */}
      <div
        className={`absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl ${
          isAmber ? "bg-amber-400/20" : "bg-teal-400/20"
        }`}
      />
      {/* Glyph */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={isAmber ? "var(--color-amber-400)" : "var(--color-teal-400)"}
        strokeWidth="1"
        className="absolute bottom-4 right-4 h-20 w-20 opacity-70"
      >
        <path d={glyphs[project.id]} strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="absolute top-4 left-4 font-mono text-[11px] text-fog-500">
        {project.id}.tsx
      </div>
    </div>
  );
}
