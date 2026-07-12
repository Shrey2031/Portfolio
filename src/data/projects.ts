export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  contribution: string;
  challenges: { problem: string; solution: string }[];
  architecture: string;
  futureImprovements: string[];
  github?: string;
  demo?: string;
  accent: "amber" | "teal";
}

export const projects: Project[] = [
  {
    id: "campushub",
    name: "CampusHub",
    tagline: "Real-time student collaboration platform",
    description:
      "A MERN platform where students coordinate coursework in real time — live discussion threads, shared notes, and an AI study assistant, instead of scattered WhatsApp groups.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Gemini API", "Cloudinary"],
    features: [
      "Real-time chat & collaboration rooms via Socket.IO",
      "AI-powered notes summarizer and study chatbot (Gemini API)",
      "Media uploads handled through Cloudinary",
      "JWT-authenticated user sessions",
    ],
    contribution:
      "Built end to end solo — schema design, REST API, Socket.IO event architecture, the React frontend, and the AI integration layer. Also owned deployment and post-launch debugging.",
    architecture:
      "React SPA talks to an Express REST API for CRUD operations and connects via a persistent Socket.IO channel for real-time events. The Gemini API is called exclusively from the Node backend — the frontend never touches the LLM key. MongoDB stores users, rooms, and messages; Cloudinary handles media.",
    challenges: [
      {
        problem: "Users were logged out on every page refresh in production.",
        solution:
          "Traced it to an API route mismatch in the auth context — the frontend was calling /auth/profile while the backend served /api/v1/users/current-user. Fixed by aligning the route.",
      },
      {
        problem: "Refreshing any non-root route on Render returned a 404.",
        solution:
          "Render was trying to serve static files directly instead of letting the React router handle client-side paths. Fixed with a rewrite rule (/* → /index.html) in the Render dashboard.",
      },
    ],
    futureImprovements: [
      "Move to a WebSocket connection pool for better scale under concurrent rooms",
      "Add offline-first support with local caching",
      "Expand the AI assistant to answer questions grounded in uploaded course material",
    ],
    github: "https://github.com/Shrey2031/Campus-hub",
    demo: "https://campushub-frontend-c389.onrender.com/",
    accent: "amber",
  },
  {
    id: "health-records",
    name: "Secure Health Record System",
    tagline: "Role-based hospital & patient record management",
    description:
      "A hospital management system where patient records stay protected behind proper authentication and role-based access — built to reflect how sensitive data actually needs to be handled, not just CRUD on a database.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    features: [
      "Role-based access control (admin, doctor, patient views)",
      "JWT authentication with protected REST endpoints",
      "Patient record CRUD with audit-friendly structure",
      "Clean separation between public and authenticated routes",
    ],
    contribution:
      "Designed the authentication and authorization layer, the REST API for patient/record management, and the RBAC middleware that gates access by role.",
    architecture:
      "Express REST API with middleware-based route protection: every protected endpoint checks a decoded JWT and the user's role before touching the database. MongoDB stores users, roles, and records with references between them rather than duplication.",
    challenges: [
      {
        problem: "Needed different data visibility per role without duplicating endpoints.",
        solution:
          "Built a single set of REST routes with role-aware middleware that filters the response payload based on the requester's role, instead of maintaining separate route trees per role.",
      },
    ],
    futureImprovements: [
      "Add audit logging for every record access",
      "Field-level encryption for the most sensitive record fields",
      "Doctor-patient messaging with the same RBAC guarantees",
    ],
     github: "https://github.com/Shrey2031/Hospital-Management-System",
    demo: "https://hospital-management-system-1-g2qu.onrender.com/",
    accent: "teal",
  },
];
