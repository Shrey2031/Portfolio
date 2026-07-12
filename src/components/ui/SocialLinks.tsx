import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";

const links = [
  { icon: FiGithub, href: profile.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="h-10 w-10 grid place-items-center rounded-full border border-ink-border text-fog-300 hover:text-ink-950 hover:bg-amber-400 hover:border-amber-400 transition-colors"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
