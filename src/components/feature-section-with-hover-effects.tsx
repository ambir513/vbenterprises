import { cn } from "@/lib/utils";
import {
  Droplet,
  Users,
  Layers,
  Clock,
  IndianRupee,
  MapPin,
  Hammer,
  Wrench,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Expert Waterproofing Solutions",
      description:
        "We specialize in terrace, wall, and internal waterproofing using industry-standard materials and proven techniques.",
      icon: <Droplet />,
    },
    {
      title: "Skilled Workforce",
      description:
        "Our trained team ensures high-quality workmanship across all construction and repair projects.",
      icon: <Users />,
    },
    {
      title: "PCC & Coba Application",
      description:
        "We execute PCC base layers and traditional coba waterproofing for long-term terrace durability.",
      icon: <Layers />,
    },
    {
      title: "On-Time Project Delivery",
      description:
        "We take deadlines seriously and strive to complete every project on schedule without compromising quality.",
      icon: <Clock />,
    },
    {
      title: "Affordable Pricing",
      description:
        "High-quality service at reasonable rates, with transparent quotes and no hidden charges.",
      icon: <IndianRupee />,
    },
    {
      title: "Serving Bidar & Nearby Areas",
      description:
        "We proudly serve homes, buildings, and commercial spaces across Bidar and surrounding regions.",
      icon: <MapPin />,
    },
    {
      title: "End-to-End Project Management",
      description:
        "From planning to execution, we handle everything so you can relax while we build.",
      icon: <Hammer />,
    },
    {
      title: "Total Interior & Civil Works",
      description:
        "We provide complete solutions for interior design, renovation, and structural civil works tailored to your needs.",
      icon: <Wrench />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-900 cursor-pointer",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-900",
        index < 4 && "lg:border-b dark:border-neutral-900"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 group-active/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-300 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 group-active/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-300 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 group-active/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-800 group-hover/feature:bg-blue-500 group-active/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 group-active/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 select-none">
          {title}
        </span>
      </div>
      <p className="text-sm select-none text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
