"use client";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";
import { BentoGrid, BentoItem } from "./bento-grid";
import {
  Hammer,
  Paintbrush,
  Droplet,
  ShieldCheck,
  Wrench,
  Home,
  Building2,
  ActivitySquare,
} from "lucide-react";

const itemsSample: BentoItem[] = [
  {
    title: "Complete Interior Execution",
    meta: "Since 1998",
    description:
      "Full turnkey projects for flats, offices, and commercial units including carpentry, ceiling, and finishes.",
    icon: <Paintbrush className="w-4 h-4 text-indigo-500" />,

    tags: ["Interior", "Ceiling", "Finishing"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Waterproofing Specialist",
    meta: "100+ Projects",
    description:
      "Reliable solutions for terrace, bathroom, and tank waterproofing with long-term durability.",
    icon: <Droplet className="w-4 h-4 text-sky-500" />,
    status: "Expertise",
    tags: ["Waterproofing", "Protection"],
  },
  {
    title: "Waterproofing Projects – Bidar",
    meta: "Ongoing Work",
    description:
      "Currently handling advanced waterproofing work across 5+ bungalows in Bidar. Includes terrace, basement, and bathroom sealing solutions.",
    icon: <Droplet className="w-4 h-4 text-blue-600" />,
    status: "In Progress",
    tags: ["Bidar", "Bungalows", "Waterproofing"],
    colSpan: 2,
  },
  {
    title: "Modern Tools & Skilled Team",
    meta: "Helpers & Mistris",
    description:
      "Equipped team ensures quality craftsmanship, accuracy, and site cleanliness.",
    icon: <ActivitySquare className="w-4 h-4 text-rose-500" />,
    tags: ["Labour", "Tools", "Skills"],
  },
  {
    title: "Civil Contracting",
    meta: "21 Flats (Santacruz)",
    description:
      "Experienced in handling large-scale residential interior works with structural modifications.",
    icon: <Hammer className="w-4 h-4 text-orange-600" />,
    tags: ["Construction", "Flat Work"],
    colSpan: 2,
  },
  {
    title: "Plumbing & Electrical",
    meta: "Certified Staff",
    description:
      "Safe and compliant utility installation as part of full-site interior work.",
    icon: <Wrench className="w-4 h-4 text-green-500" />,
    status: "In-house",
    tags: ["Plumbing", "Electric"],
  },
  {
    title: "Project Supervision",
    meta: "Andheri, Bandra, Dadar",
    description:
      "On-site supervision, quality checks, and material management for timely completion.",
    icon: <ShieldCheck className="w-4 h-4 text-teal-600" />,
    status: "Managed",
    tags: ["Execution", "Supervision"],
  },

  {
    title: "Residential & Commercial Projects",
    meta: "Mumbai Citywide",
    description: "Serving apartments, bungalows, showrooms, and office spaces.",
    icon: <Home className="w-4 h-4 text-yellow-500" />,
    tags: ["Residential", "Commercial"],
  },
  {
    title: "Client-Centric Approach",
    meta: "Transparent Process",
    description:
      "Clear estimation, step-by-step updates, and customer-first communication.",
    icon: <Building2 className="w-4 h-4 text-fuchsia-500" />,
    tags: ["Trust", "Process"],
  },
];

const transitionVariants: {
  item: Variants;
} = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const, // 👈 Important fix
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function Feature() {
  return (
    <div className="py-28 px-4 md:px-8 bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      <AnimatedGroup variants={transitionVariants}>
        <div className="max-w-6xl mx-auto select-none ">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Our Core Features
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover what makes VB Enterprises one of the most trusted
              interior and civil contractors in Mumbai.
            </p>
          </div>

          <BentoGrid items={itemsSample} />

          <div className="mt-12 text-center">
            <p className="text-base text-gray-700 dark:text-gray-300">
              At <strong>VB Enterprises</strong>, we combine craftsmanship,
              professionalism, and trust—delivering excellence that lasts.
            </p>
          </div>
        </div>
      </AnimatedGroup>
    </div>
  );
}
