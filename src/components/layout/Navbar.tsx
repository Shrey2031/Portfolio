import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-md border-b border-ink-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display italic text-lg text-fog-100 tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-amber-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-fog-300">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative group transition-colors hover:text-fog-100"
              >
                <span className="text-teal-400/70 mr-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-[13px] font-mono font-medium text-ink-950 hover:bg-amber-300 transition-colors"
          >
            Hire me
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="h-9 w-9 grid place-items-center rounded-full border border-ink-border text-fog-100"
          >
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-md border-b border-ink-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm text-fog-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-[13px] font-medium text-ink-950"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
