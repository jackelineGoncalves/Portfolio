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

export type ProjectCategory =
  | "Mobile"
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "UI/UX"
  | "SaaS";

export type Project = {
  slug: string;
  name: string;
  smallDescription: string;
  fullDescription: string;
  onProgressTag?: boolean;
  workProjectTag?: boolean;
  hoveredTitle: string;
  projectType: string;
  hasCodeBtn?: boolean;
  hasDetailsBtn?: boolean;
  codeUrl?: string;
  liveUrl?: string;
  image: ImageMetadata;
  previewImages?: ImageMetadata[];
  technologiesIcons: TechItem[];
  // Detail page fields
  year: string;
  role: string;
  status: "In Progress" | "Completed" | "Archived";
  features: ProjectFeature[];
  challenge: string;
  solution: string;
  category: ProjectCategory[];
};

export const projects: Project[] = [
  {
    slug: "mova",
    name: "MOVA",
    smallDescription: "App for personal trainer and client management.",
    fullDescription:
      "MOVA is a mobile app designed for personal trainers to manage clients, training plans, nutrition plans, and physical assessments in one place.",
    onProgressTag: true,
    workProjectTag: false,
    hoveredTitle: "App for personal trainer and client management",
    projectType: "Personal Project",
    hasCodeBtn: true,
    hasDetailsBtn: true,
    // codeUrl: undefined,
    liveUrl: 'ndhenfhnehfn',
    image: mova,
    codeUrl: 'cjnefjnefjnefefjnejfjnfjne',
    previewImages: [mova, mova, mova],
    category: ['Full Stack', 'Mobile', 'UI/UX'],
    technologiesIcons: [
      { icon: React, label: "React Native" },
      { icon: Expo, label: "Expo" },
      { icon: Supabase, label: "Supabase" },
      { icon: Postgre, label: "PostgreSQL" },
      { icon: TypeScript, label: "TypeScript" },
    ],
    // Detail
    year: "2024",
    role: "Lead Mobile Developer",
    status: "In Progress",
    challenge:
      "Personal trainers struggle to manage multiple clients, plans, and assessments using scattered tools like spreadsheets and messaging apps. There was no single mobile-first solution designed specifically for their workflow.",
    solution:
      "MOVA centralizes client management, training plan creation, nutrition tracking, and physical assessments into a single, intuitive mobile app — built with React Native for cross-platform performance and Supabase for real-time data sync.",
    features: [
      {
        title: "Client Management",
        description:
          "Create and manage client profiles with full history, goals, and progress tracking in one place.",
      },
      {
        title: "Training Plans",
        description:
          "Build custom training plans with exercises, sets, reps, and rest periods. Assign them to clients with a single tap.",
      },
      {
        title: "Nutrition Tracking",
        description:
          "Design nutrition plans and track macros per client. Supports multiple meal schedules.",
      },
      {
        title: "Physical Assessments",
        description:
          "Log body measurements and assessments over time with visual progress charts.",
      },
    ],
  },
  {
    slug: "saas-platform",
    name: "SaaS Platform",
    smallDescription:
      "An immersive 3D e-commerce platform featuring virtual storefronts.",
    fullDescription:
      "A SaaS platform focused on immersive commerce experiences and interactive product exploration.",
    onProgressTag: true,
    workProjectTag: true,
    hoveredTitle: "3D commerce experience",
    projectType: "Work Project",
    hasCodeBtn: false,
    hasDetailsBtn: true,
    codeUrl: undefined,
    liveUrl: undefined,
    image: mova,
    category: ['Frontend'],
    previewImages: [mova, mova, mova],
    technologiesIcons: [
      { icon: React, label: "React Native" },
      { icon: Expo, label: "Expo" },
      { icon: Supabase, label: "Supabase" },
      { icon: Postgre, label: "PostgreSQL" },
      { icon: TypeScript, label: "TypeScript" },
    ],
    // Detail
    year: "2025",
    role: "FullStack Engineer",
    status: "In Progress",
    challenge:
      "Traditional e-commerce experiences feel flat and disconnected. Customers can't properly visualize products before purchasing, leading to high return rates and low conversion.",
    solution:
      "An immersive SaaS platform where merchants can set up 3D virtual storefronts. Customers browse and interact with products in a spatial environment before adding to cart.",
    features: [
      {
        title: "Virtual Storefronts",
        description:
          "Merchants configure fully interactive 3D environments that reflect their brand identity.",
      },
      {
        title: "Product Visualization",
        description:
          "Customers rotate, zoom, and inspect products in detail before purchasing.",
      },
      {
        title: "Multi-tenant Architecture",
        description:
          "Each merchant gets an isolated store with custom domain, branding, and inventory.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Real-time metrics on engagement, session duration, and conversion per product.",
      },
    ],
  },
];
