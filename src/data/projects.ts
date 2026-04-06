// src/data/projects.ts
import tasks from "../assets/images/projects/mova/tasks.png";
import finantialDashboard from "../assets/images/projects/mova/finantial-dashboard.png";
import mondayMeals from "../assets/images/projects/mova/monday-meals.png";
import assessmentChart from "../assets/images/projects/mova/assessment-chart.png";
import assessmentsPhotos from "../assets/images/projects/mova/assessments-photos.png";
import clientNavbar from "../assets/images/projects/mova/client-navbar.png";
import customizeExercise from "../assets/images/projects/mova/customize-exercise.png";
import mealDetails from "../assets/images/projects/mova/meal-datails.png";
import nutritionFacts from "../assets/images/projects/mova/nutrition-facts.png";
import nutritionPlan from "../assets/images/projects/mova/nutrition-plan.png";
import ptNavbar from "../assets/images/projects/mova/pt-navbar.png";
import ptPacks from "../assets/images/projects/mova/pt-packs.png";
import trainingPlan from "../assets/images/projects/mova/training-plan.png";
import workoutDetails from "../assets/images/projects/mova/workout-details.png";
import elephai1 from "../assets/images/projects/elephAi/image-1.png";
import elephai2 from "../assets/images/projects/elephAi/image-2.png";
import elephaiHome from "../assets/images/projects/elephAi/home.png";
import elephaiChat from "../assets/images/projects/elephAi/chat.png";
import elephaiProfile from "../assets/images/projects/elephAi/profile.png";
import elephaiImage35 from "../assets/images/projects/elephAi/image 35.png";
import onboarding1 from "../assets/images/projects/onboarding/image-1.png";
import Server from "../assets/svg/Server.astro";
import Dart from "../assets/svg/technologies/Dart.astro";
import Directus from "../assets/svg/technologies/Directus.astro";
import Expo from "../assets/svg/technologies/Expo.astro";
import Figma from "../assets/svg/technologies/Figma.astro";
import Firebase from "../assets/svg/technologies/Firebase.astro";
import Flutter from "../assets/svg/technologies/Flutter.astro";
import GraphQL from "../assets/svg/technologies/GraphQL.astro";
import NextJS from "../assets/svg/technologies/NextJS.astro";
import Postgre from "../assets/svg/technologies/Postgre.astro";
import React from "../assets/svg/technologies/React.astro";
import Supabase from "../assets/svg/technologies/Supabase.astro";
import TypeScript from "../assets/svg/technologies/TypeScript.astro";

export type TechItem = {
  icon: any;
  label: string;
};

export type ProjectCategory = "Mobile" | "Frontend" | "Backend" | "Full Stack" | "UI/UX" | "SaaS";

export type PreviewVariant = "triple-phone" | "single-screen" | "two-screens";

export type MetricItem = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  onProgressTag?: boolean;
  workProjectTag?: boolean;
  hoveredTitle: string;
  projectType: string;
  categories: ProjectCategory[];
  hasCodeBtn?: boolean;
  hasDetailsBtn?: boolean;
  codeUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  image: ImageMetadata;
  previewImages?: ImageMetadata[];
  previewVariant: PreviewVariant;
  galleryImages?: ImageMetadata[];
  technologiesIcons: TechItem[];
  metrics?: MetricItem[];
  year: string;
  role: string;
  status: "In Progress" | "Completed" | "Archived";
};

export const projects: Project[] = [
  {
    slug: "mova",
    name: "MOVA",
    onProgressTag: true,
    workProjectTag: false,
    hoveredTitle: "SaaS platform for personal trainers",
    projectType: "Personal Project · Founder",
    categories: ["Mobile", "Full Stack", "UI/UX", "SaaS"],
    hasCodeBtn: false,
    hasDetailsBtn: true,
    codeUrl: undefined,
    liveUrl: undefined,
    image: tasks,
    previewImages: [finantialDashboard, tasks, mondayMeals],
    previewVariant: "triple-phone",
    galleryImages: [
      finantialDashboard, tasks, mondayMeals, trainingPlan, workoutDetails,
      customizeExercise, nutritionPlan, nutritionFacts, mealDetails,
      ptPacks, assessmentChart, assessmentsPhotos, clientNavbar, ptNavbar,
    ],
    technologiesIcons: [
      { icon: React, label: "React Native" },
      { icon: Expo, label: "Expo" },
      { icon: TypeScript, label: "TypeScript" },
      { icon: Supabase, label: "Supabase" },
      { icon: Postgre, label: "PostgreSQL" },
      { icon: Figma, label: "Figma" },
    ],
    metrics: [
      { value: "50+", label: "Product screens designed in Figma" },
      { value: "0→1", label: "Built end-to-end as a solo founder" },
      { value: "70%", label: "Estimated reduction in plan creation time" },
      { value: "Multi-tenant", label: "Isolated data per workspace" },
    ],
    year: "2025",
    role: "Founder & Full Stack Developer",
    status: "In Progress",
  },
  {
    slug: "elephai",
    name: "ElephAi App",
    onProgressTag: false,
    workProjectTag: true,
    hoveredTitle: "Flutter Mobile App — Rebuilt and Launched to Production",
    projectType: "Work Project · Lead Developer",
    categories: ["Mobile", "Frontend"],
    hasCodeBtn: false,
    hasDetailsBtn: true,
    codeUrl: undefined,
    liveUrl: undefined,
    appStoreUrl: "https://apps.apple.com/pt/app/elephai-womens-safe-space/id6759984926",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.unwindminds.elephai.app",
    image: elephai1,
    previewImages: [elephai1, elephai2],
    previewVariant: "two-screens",
    galleryImages: [elephaiHome, elephai1, elephai2, elephaiChat, elephaiProfile, elephaiImage35],
    technologiesIcons: [
      { icon: Flutter, label: "Flutter" },
      { icon: Dart, label: "Dart" },
      { icon: Firebase, label: "Firebase" },
      { icon: Server, label: "API Integration" },
    ],
    metrics: [
      { value: "<8w", label: "Broken to live on both stores" },
      { value: "100%", label: "Core modules rebuilt" },
      { value: "2", label: "Stores launched (iOS & Android)" },
      { value: "0→1", label: "Architecture built from scratch" },
    ],
    year: "2025",
    role: "Lead Developer",
    status: "In Progress",
  },
  {
    slug: "nearsoft-onboarding",
    name: "Digital Onboarding Platform",
    onProgressTag: false,
    workProjectTag: true,
    hoveredTitle: "Configurable onboarding for financial institutions",
    projectType: "Work Project · Frontend Engineer",
    categories: ["Frontend"],
    hasCodeBtn: false,
    hasDetailsBtn: true,
    codeUrl: undefined,
    liveUrl: "https://nearsoft.pt/digital-banking/onboarding/",
    image: onboarding1,
    previewImages: [onboarding1],
    previewVariant: "single-screen",
    galleryImages: [onboarding1],
    technologiesIcons: [
      { icon: TypeScript, label: "TypeScript" },
      { icon: React, label: "React" },
      { icon: NextJS, label: "Next.js" },
      { icon: Directus, label: "Directus CMS" },
      { icon: GraphQL, label: "GraphQL" },
    ],
    metrics: [
      { value: "80%", label: "Reduction in support tickets" },
      { value: "3+", label: "Financial institutions served" },
      { value: "8mo", label: "Internship duration" },
      { value: "0→1", label: "CI/CD built from scratch" },
    ],
    year: "2024",
    role: "Frontend Engineer Intern",
    status: "Completed",
  },
];
