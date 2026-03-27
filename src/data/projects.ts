// src/data/projects.ts
import mova from "../assets/images/MOVA-1.png";
import Expo from "../assets/svg/Expo.astro";
import Postgre from "../assets/svg/Postgre.astro";
import React from "../assets/svg/React.astro";
import Supabase from "../assets/svg/Supabase.astro";
import TypeScript from "../assets/svg/TypeScript.astro";

export type TechItem = {
  icon: any;
  label: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectCategory = "Mobile" | "Frontend" | "Backend" | "Full Stack" | "UI/UX" | "SaaS";

export type Project = {
  slug: string;
  name: string;
  smallDescription: string;
  fullDescription: string;
  onProgressTag?: boolean;
  workProjectTag?: boolean;
  hoveredTitle: string;
  projectType: string;
  categories: ProjectCategory[];
  hasCodeBtn?: boolean;
  hasDetailsBtn?: boolean;
  codeUrl?: string;
  liveUrl?: string;
  image: ImageMetadata;
  previewImages?: ImageMetadata[];
  technologiesIcons: TechItem[];
  year: string;
  role: string;
  status: "In Progress" | "Completed" | "Archived";
  features: ProjectFeature[];
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "mova",
    name: "MOVA",
    smallDescription:
      "SaaS platform that replaces spreadsheet-based workflows for personal trainers with a unified, automated client management system.",
    fullDescription:
      "MOVA is a multi-tenant SaaS built end-to-end as a solo founder project. It replaces the scattered spreadsheets, WhatsApp messages and manual PDFs that personal trainers use daily — consolidating client management, training plans, nutrition tracking and progress assessments into one fast, clean mobile experience.",
    onProgressTag: true,
    workProjectTag: false,
    hoveredTitle: "SaaS platform for personal trainers",
    projectType: "Personal Project · Founder",
    categories: ["Mobile", "Full Stack", "UI/UX", "SaaS"],
    hasCodeBtn: false,
    hasDetailsBtn: true,
    codeUrl: undefined,
    liveUrl: undefined,
    image: mova,
    previewImages: [mova, mova, mova],
    technologiesIcons: [
      { icon: React, label: "React Native" },
      { icon: Expo, label: "Expo" },
      { icon: TypeScript, label: "TypeScript" },
      { icon: Supabase, label: "Supabase" },
      { icon: Postgre, label: "PostgreSQL" },
    ],
    year: "2025",
    role: "Founder & Full Stack Developer",
    status: "In Progress",
    challenge:
      "Personal trainers lose 3–4 hours daily managing clients through spreadsheets, messaging apps and disconnected PDFs. There was no mobile-first, all-in-one tool built specifically around their real workflow — most solutions are either too generic or too expensive.",
    solution:
      "Built MOVA as a multi-tenant SaaS from scratch — a React Native app backed by a Supabase architecture with per-workspace data isolation (RLS), real-time sync, and role-based access. Designed 40+ screens in Figma before writing a single line of code, ensuring the UX actually fits how trainers think.",
    features: [
      {
        title: "Client Management",
        description:
          "Full client profiles with history, goals, physical data and progress over time. Trainers manage 10+ clients without switching tools.",
      },
      {
        title: "Training Plan Builder",
        description:
          "Create structured training plans with exercises, sets, reps and rest. Assign to any client in seconds. Estimated 70% reduction in plan creation time.",
      },
      {
        title: "Nutrition Tracking",
        description:
          "Design meal plans with macro targets per client. Supports multiple daily schedules and dietary restrictions.",
      },
      {
        title: "Multi-tenant Architecture",
        description:
          "Each trainer gets an isolated workspace. Row-Level Security on PostgreSQL ensures zero data leakage between accounts.",
      },
    ],
  },
  {
    slug: "elephai",
    name: "ElephAi App",
    smallDescription:
      "Rescued and rebuilt a failing Flutter app — from unstable pre-launch codebase to production-ready in under 8 weeks.",
    fullDescription:
      "ElephAi is a B2C/B2B mobile app by Unwind Minds. I joined as Lead Developer when the app was stuck in a critical pre-launch state — unstable, tightly coupled, and blocked from going live. I took full ownership of the technical recovery: refactored the entire codebase, established a clean architecture, and delivered the first successful public release to both App Store and Google Play.",
    onProgressTag: true,
    workProjectTag: true,
    hoveredTitle: "Production Flutter app — from broken to live",
    projectType: "Work Project · Lead Developer",
    categories: ["Mobile", "Frontend"],
    hasCodeBtn: false,
    hasDetailsBtn: true,
    codeUrl: undefined,
    liveUrl: undefined,
    image: mova,
    previewImages: [mova, mova, mova],
    technologiesIcons: [
      { icon: React, label: "Flutter" },
      { icon: TypeScript, label: "Dart" },
      { icon: Supabase, label: "Firebase" },
      { icon: Postgre, label: "REST API" },
    ],
    year: "2025",
    role: "Lead Developer",
    status: "In Progress",
    challenge:
      "The app had been in development for months but was nowhere near production-ready. The codebase had no architectural boundaries, deeply coupled modules, and no clear ownership. The team needed someone to take the wheel, assess the damage, and ship.",
    solution:
      "Took full technical ownership from day one. Audited the entire codebase, identified critical failure points, and rebuilt core modules with clear separation of concerns. Established architectural standards, documented decisions, and coordinated the App Store / Google Play release pipeline — delivering a stable, public-ready app in under 8 weeks.",
    features: [
      {
        title: "Full Codebase Refactor",
        description:
          "100% of core modules rebuilt. Eliminated all tightly coupled dependencies and introduced clean architectural boundaries that scale with the team.",
      },
      {
        title: "Architecture Leadership",
        description:
          "Defined and documented all technical decisions, folder structure, state management patterns and API integration standards for the project.",
      },
      {
        title: "App Store & Play Store Release",
        description:
          "Configured signing, build pipelines and metadata for both stores. Delivered the app's first successful public launch from zero infrastructure.",
      },
      {
        title: "Ongoing Feature Development",
        description:
          "Continuing to build new product features and integrations (including AI API) while maintaining architectural quality and velocity.",
      },
    ],
  },
];
