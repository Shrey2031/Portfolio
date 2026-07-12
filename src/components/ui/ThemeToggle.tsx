import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative h-9 w-9 grid place-items-center rounded-full border border-ink-border text-fog-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors cursor-pointer"
    >
      {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
    </button>
  );
}
