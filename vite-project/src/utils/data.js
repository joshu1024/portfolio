import {
  Code2,
  Heart,
  Coffee,
  BookOpen,
  Database,
  Server,
  Mail,
  MapPin,
  Phone,
  Brain,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import EKB from "../assets/images/EKB.PNG";
import PROJECT_IMG_2 from "../assets/images/project2.PNG";
import PROJECT_IMG_4 from "../assets/images/PROJECT_IMG_4.PNG";
import ecom from "../assets/images/ecom.PNG";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 85, color: "bg-blue-500" },
      { name: "TypeScript", level: 80, color: "bg-blue-600" },
      { name: "Redux Toolkit", level: 85, color: "bg-purple-500" },
      { name: "Tailwind CSS", level: 82, color: "bg-cyan-500" },
      { name: "shadcn/ui", level: 75, color: "bg-slate-500" },
      { name: "Framer Motion", level: 70, color: "bg-pink-500" },
      { name: "CSS / HTML", level: 88, color: "bg-orange-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 82, color: "bg-green-500" },
      { name: "Express.js", level: 82, color: "bg-gray-600" },
      { name: "TypeScript", level: 80, color: "bg-blue-600" },
      { name: "REST APIs", level: 82, color: "bg-orange-500" },
      { name: "SSE Streaming", level: 78, color: "bg-yellow-500" },
      { name: "JWT + Auth", level: 80, color: "bg-red-500" },
    ],
  },
  {
    title: "AI Engineering",
    icon: Brain,
    description: "Building production AI systems",
    skills: [
      { name: "RAG Pipelines", level: 78, color: "bg-purple-600" },
      { name: "pgvector", level: 75, color: "bg-blue-700" },
      { name: "Groq API", level: 80, color: "bg-orange-600" },
      { name: "Cohere Embeddings", level: 75, color: "bg-violet-500" },
      { name: "Prompt Engineering", level: 80, color: "bg-pink-600" },
      { name: "Tool Use / Function Calling", level: 78, color: "bg-green-600" },
      { name: "Semantic Search", level: 75, color: "bg-teal-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "PostgreSQL", level: 82, color: "bg-blue-700" },
      { name: "pgvector", level: 75, color: "bg-indigo-600" },
      { name: "Prisma ORM", level: 80, color: "bg-slate-600" },
      { name: "MongoDB", level: 85, color: "bg-green-600" },
      { name: "Neon", level: 72, color: "bg-teal-600" },
    ],
  },
];

export const TECH_STACK = [
  "Languages: JavaScript, TypeScript",
  "Styling: Tailwind CSS, shadcn/ui, HTML5, CSS3",
  "Build Tools: Vite",
  "AI: Groq, Cohere, pgvector, SSE streaming",
  "DevOps: GitHub Actions, Render, Vercel",
];

export const STATS = [
  { number: "6", label: "Projects Completed" },
  { number: "2", label: "Years Experience" },
  { number: "51", label: "Automated Tests" },
  { number: "3", label: "AI Systems Built" },
];

export const PROJECTS = [
  {
    id: 6,
    title: "Apply-AI — Autonomous Job Application Agent",
    description: [
      "Autonomous AI agent that researches companies, identifies skill gaps, and drafts tailored cover letters — in progress",
      "ReAct loop — model decides which tool to call next; code enforces guardrails (max iterations, repeated-call detection, cost budget)",
      "Multi-step tool execution with retries, exponential backoff, and Zod argument validation",
      "Full trace logging — every thought, tool call, and observation saved to the database",
    ],
    image: EKB, // replace with apply-ai screenshot when available
    tags: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Groq",
      "Cohere",
      "BullMQ",
      "WebSockets",
      "Mastra",
      "React",
      "shadcn/ui",
    ],
    liveUrl: "#", // update when deployed
    githubUrl: "https://github.com/joshu1024/apply-ai",
    featured: true,
    category: "AI Agent",
    badge: "🔄 In Progress",
  },
  {
    id: 5,
    title: "Enterprise AI Knowledge Base — RAG SaaS",
    description: [
      "Multi-tenant RAG SaaS where teams upload company documents and query them in natural language with streaming answers and source citations",
      "Advanced RAG pipeline — HyDE + hybrid search (vector + BM25 + RRF) + re-ranking + semantic caching at 0.92 similarity threshold",
      "51 automated tests (19 backend + 32 frontend) with GitHub Actions CI — green on every push",
      "Single org per email domain — company users auto-join same org, public email domains get personal orgs",
    ],
    image: PROJECT_IMG_4, // replace with enterprise-kb screenshot when available
    tags: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "Neon",
      "Cohere",
      "Groq",
      "React",
      "shadcn/ui",
      "Redux Toolkit",
      "GitHub Actions",
      "Render",
      "Vercel",
    ],
    liveUrl: "https://enterprise-ai-kb.vercel.app",
    githubUrl: "https://github.com/joshu1024/Enterprise-ai-kb",
    featured: true,
    category: "AI / RAG",
    badge: "✅ Live",
  },
  {
    id: 4,
    title: "SneakerZone — E-Commerce + AI Shopping Assistant",
    description: [
      "Production-ready e-commerce platform with an AI shopping assistant that uses tool calling to query real PostgreSQL data and stream results word by word",
      "Semantic product search with Cohere embeddings + pgvector — 'something for a teenager who likes running' returns relevant results by meaning not keywords",
      "Full AI security layer — rate limiting, prompt injection detection, output moderation, per-user token quotas, tool calls scoped by userId",
      "Migrated database from MongoDB to PostgreSQL + Prisma; implemented PayPal payments and Cloudinary image uploads",
    ],
    image: ecom,
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "Groq",
      "Cohere",
      "Redux Toolkit",
      "PayPal",
      "Cloudinary",
      "SSE",
      "Vercel",
      "Render",
    ],
    liveUrl:
      "https://mern-ecommerce-26w1-git-main-joes-projects-50075601.vercel.app/",
    githubUrl: "https://github.com/joshu1024/mern-ecommerce",
    featured: true,
    category: "Full Stack + AI",
    badge: "✅ Live",
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    description: [
      "Role-based admin dashboard with secure JWT authentication using httpOnly cookies, reducing XSS token exposure risk to near zero",
      "Migrated entire codebase to TypeScript across 10+ Redux slices, 20+ React components, and 15+ API endpoints",
      "5+ data visualizations using Recharts with MongoDB aggregation pipelines — real-time insights across 50K+ records",
      "Reduced initial load time by ~40% with server-side pagination and optimized queries",
    ],
    image: PROJECT_IMG_4,
    tags: [
      "MERN",
      "TypeScript",
      "Redux Toolkit",
      "Recharts",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel",
      "Railway",
    ],
    liveUrl: "https://dashboard-mern-tau.vercel.app",
    githubUrl: "https://github.com/joshu1024/Analytics-Dashboard---MERN",
    featured: false,
    category: "Full Stack",
    badge: "✅ Live",
  },
  {
    id: 1,
    title: "AI Text to Image Generator",
    description: [
      "AI-powered image generation app using the MERN stack with ClipDrop API integration",
      "Converted user text prompts into high-quality images with optimized API request handling",
      "Designed a responsive UI with real-time rendering for smooth user interactions",
      "Optimized request flow and loading states to improve perceived performance",
    ],
    image: PROJECT_IMG_1,
    tags: [
      "MERN",
      "ClipDrop",
      "AI",
      "React",
      "Node.js",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://ai-text-to-image-six.vercel.app/",
    githubUrl: "https://github.com/joshu1024/AI-Text-to-Image-",
    featured: false,
    category: "Full Stack",
    badge: "✅ Live",
  },
  {
    id: 2,
    title: "AI Image Background Remover",
    description: [
      "MERN stack application for AI-based background removal using image processing APIs",
      "Automated background extraction for precise and efficient image editing",
      "High-quality image export with optimized processing workflows",
      "Clean, responsive UI for seamless upload, processing, and download experience",
    ],
    image: PROJECT_IMG_2,
    tags: [
      "MERN",
      "AI",
      "ClipDrop",
      "React",
      "Node.js",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://bg-remover-xi-brown.vercel.app/",
    githubUrl: "https://github.com/joshu1024/bg-remover",
    featured: false,
    category: "Full Stack",
    badge: "✅ Live",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Then moved on to React.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Diving Deeper into Full-Stack",
    company: "Self-driven",
    description:
      "Expanded knowledge by learning Node.js, Express, and MongoDB. Built several full-stack applications using the MERN stack.",
    icon: Code2,
    color: "bg-yellow-500",
  },
  {
    year: "2025",
    title: "Completed MERN Stack + Started AI Engineering",
    company: "Self-taught",
    description:
      "Mastered the MERN stack and began integrating AI — streaming chat, tool use, semantic search with pgvector, and full RAG pipelines. Migrated ecommerce app from MongoDB to PostgreSQL.",
    icon: Code2,
    color: "bg-purple-500",
  },
  {
    year: "2026",
    title: "Building Production AI Systems",
    company: "Self-driven",
    description:
      "Built a multi-tenant RAG SaaS (Enterprise AI Knowledge Base) with HyDE, hybrid search, re-ranking, semantic caching, 51 automated tests, and GitHub Actions CI. Now building an autonomous AI agent (Apply-AI).",
    icon: Brain,
    color: "bg-orange-500",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/joshu1024",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/joshua-kipamet-148698140/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://x.com/JoeKipamet71036",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=joshuakipamet@gmail.com&su=Subject&body=BodyText",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
];

export const PASSIONS = [
  {
    title: "AI Engineering",
    description:
      "Building production AI systems — RAG pipelines, agents, semantic search, and streaming interfaces",
    icon: Brain,
  },
  {
    title: "User Experience",
    description: "Crafting seamless, responsive interfaces that users enjoy",
    icon: Heart,
  },
  {
    title: "Problem Solving",
    description: "Turning complex challenges into clean, practical solutions",
    icon: Coffee,
  },
  {
    title: "Continuous Learning",
    description:
      "Always exploring new tools and best practices in AI engineering and fullstack development",
    icon: BookOpen,
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, KE",
  },
  {
    icon: Mail,
    label: "Email",
    value: "joshuakipamet@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 (071) 337-3043",
  },
];

export const SECTIONS = ["home", "skills", "projects", "about", "contact"];
