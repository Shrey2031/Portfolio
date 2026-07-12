import type { Tier } from "@/data/skills";
import { tierMeta } from "@/data/skills";

export function TierDots({ tier }: { tier: Tier }) {
  const { dots, label } = tierMeta[tier];
  return (
    <span className="inline-flex items-center gap-1" aria-label={label} title={label}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < dots ? "bg-amber-400" : "bg-ink-border"
          }`}
        />
      ))}
    </span>
  );
}
