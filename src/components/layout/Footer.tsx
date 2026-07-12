import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-fog-500">
          © {new Date().getFullYear()} {profile.name} · built with React & Tailwind
        </p>
        <p className="font-mono text-[11px] text-fog-500">
          <span className="text-teal-400">●</span> status: open to work
        </p>
      </div>
    </footer>
  );
}
