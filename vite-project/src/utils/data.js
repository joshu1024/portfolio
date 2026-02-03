import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project1.PNG";
import PROJECT_IMG_2 from "../assets/images/project2.PNG";
import PROJECT_IMG_4 from "../assets/images/PROJECT_IMG_4.PNG";
import ecom from "../assets/images/ecom.PNG";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 80, color: "bg-blue-500" },
      { name: "Tailwind CSS", level: 80, color: "bg-cyan-500" },
      { name: "CSS", level: 85, color: "bg-pink-500" },
      { name: "HTML", level: 90, color: "bg-pink-500" },
      { name: "Redux ToolKit", level: 80, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 70, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 80, color: "bg-green-500" },
      { name: "Express.js", level: 80, color: "bg-gray-700" },
      { name: "Typescript", level: 70, color: "bg-pink-600" },
      { name: "REST APIs", level: 75, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "PostGreSQL", level: 65, color: "bg-blue-700" },
    ],
  },
];

export const TECH_STACK = [
  "Languages: JavaScript",
  "Styling: HTML5, CSS3",

  "Build Tools: Vite",
];
export const STATS = [
  { number: "2", label: "Projects Completed" },
  { number: "1", label: "Year Experience" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Text to Image Generator",
    description:
      "An AI-powered application that extracts and converts text to image using ClipDrop and machine learning, built with the MERN stack.",
    image: PROJECT_IMG_1,
    tags: ["MERN", "ClipDrop", "AI", "React", "Node.js"],
    liveUrl: "https://ai-text-to-image-six.vercel.app/",
    githubUrl: "https://github.com/joshu1024/AI-Text-to-Image-",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "AI Image Background Remover",
    description:
      "A MERN-based web app that uses AI to intelligently remove backgrounds from images, enabling seamless editing and exporting.",
    image: PROJECT_IMG_2,
    tags: ["MERN", "AI", "ClipDrop", "React", "Node.js"],
    liveUrl: "https://bg-remover-xi-brown.vercel.app/",
    githubUrl: "https://github.com/joshu1024/bg-remover",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "MERN E-Commerce App",
    description:
      "A full-stack E-Commerce application built with the MERN stack, featuring secure authentication, product management, cart and checkout flow, PayPal integration, and an admin dashboard for a complete online shopping experience.",
    image: ecom,
    tags: [
      "MERN",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "PayPal",
    ],
    liveUrl:
      "https://mern-ecommerce-26w1-git-main-joes-projects-50075601.vercel.app/",
    githubUrl: "https://github.com/joshu1024/mern-ecommerce",
    featured: true,
    category: "Full Stack",
  },

  {
    id: 4,
    title: "MERN Analytics Dashboard",
    description:
      "A full-stack analytics dashboard built with the MERN stack, currently ~90% complete. It features interactive data visualizations using Recharts, global state management with Redux Toolkit, and a responsive admin-style interface for monitoring key performance metrics.",
    image: PROJECT_IMG_4,
    tags: [
      "MERN",
      "Redux Toolkit",
      "Recharts",
      "Analytics Dashboard",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://your-mern-analytics-dashboard.vercel.app/",
    githubUrl: "https://github.com/joshu1024/mern-analytics-dashboard",
    featured: true,
    category: "Full Stack",
    status: "In Progress (90%)",
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
    title: "Completed MERN Stack Learning",
    company: "Self-taught",
    description:
      "Mastered the MERN stack and began creating production-ready applications with real-world APIs and AI integrations.",
    icon: Code2,
    color: "bg-purple-500",
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
      "Always exploring new tools and best practices in modern JavaScript.",
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
// utils/sections.js
export const SECTIONS = ["home", "skills", "projects", "about", "contact"];
