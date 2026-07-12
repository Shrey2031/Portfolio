// ============================================================
// Central profile data. Edit this file to update content
// across the whole site — nothing below should be hardcoded
// in components.
// ============================================================

export const profile = {
  name: "Shreya Kumari",
  role: "Full-Stack Developer",
  tagline: "I build fast, reliable web apps end to end — React on the front, Node on the back, and everything wired together properly.",
  location: "Patna, Bihar, India",
  email: "shreyakumari44611@gmail.com",
  phone: "+91 8789989331",
  github: "https://github.com/Shrey2031",
  linkedin: "https://www.linkedin.com/in/shreya-kumari-424684277/",
  resumeUrl: "resume/resume.pdf",
  availability: "Open to full-stack / backend internship & entry-level roles",
};

export const whoami = [
  "final-year B.S. CS & Data Analytics, IIT Patna",
  "MERN stack developer",
  "member, 100xDevs community",
  "based in Patna · open to relocation & remote",
];

export const terminalCommands = [
  {
    command: "whoami",
    output: whoami,
  },
  {
    command: "git log --oneline -3",
    output: [
      "a3f9c1e  fix(auth): correct profile route mismatch",
      "e21b7a0  feat(campushub): add realtime collab via socket.io",
      "9c4d201  chore: deploy to render, configure rewrite rules",
    ],
  },
];

export const stats = [
  { label: "CGPA", value: "8.1" },
  { label: "Grad Year", value: "2026" },
  { label: "Projects Shipped", value: "2" },
  { label: "DSA Solved", value: "190+" },
];
