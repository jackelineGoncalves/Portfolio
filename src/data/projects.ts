// src/data/projects.ts
import mova from "../assets/images/MOVA-1.png";
import Server from "../assets/svg/Server.astro";
import Dart from "../assets/svg/technologies/Dart.astro";
import Expo from "../assets/svg/technologies/Expo.astro";
import Figma from "../assets/svg/technologies/Figma.astro";
import Firebase from "../assets/svg/technologies/Firebase.astro";
import Flutter from "../assets/svg/technologies/Flutter.astro";
import Postgre from "../assets/svg/technologies/Postgre.astro";
import React from "../assets/svg/technologies/React.astro";
import Supabase from "../assets/svg/technologies/Supabase.astro";
import TypeScript from "../assets/svg/technologies/TypeScript.astro";

export type TechItem = {
  icon: any;
  label: string;
};

export type ProjectCategory = "Mobile" | "Frontend" | "Backend" | "Full Stack" | "UI/UX" | "SaaS";

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
  image: ImageMetadata;
  previewImages?: ImageMetadata[];
  technologiesIcons: TechItem[];
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
    image: mova,
    previewImages: [mova, mova, mova],
    technologiesIcons: [
      { icon: React, label: "React Native" },
      { icon: Expo, label: "Expo" },
      { icon: TypeScript, label: "TypeScript" },
      { icon: Supabase, label: "Supabase" },
      { icon: Postgre, label: "PostgreSQL" },
      { icon: Figma, label: "Figma" },

    ],
    year: "2025",
    role: "Founder & Full Stack Developer",
    status: "In Progress",
  },
  {
    slug: "elephai",
    name: "ElephAi App",
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
      { icon: Flutter, label: "Flutter" },
      { icon: Dart, label: "Dart" },
      { icon: Firebase, label: "Firebase" },
      { icon: Server, label: "API Integration" },
    ],
    year: "2025",
    role: "Lead Developer",
    status: "In Progress",
  },
];
