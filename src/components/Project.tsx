"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

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
export default function Project() {
  return (
    <section className="py-24 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6 md:w-[1100px] mx-auto">
        <AnimatedGroup variants={transitionVariants}>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Projects
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Insights, trends, and tips from 25+ years in civil contracting
                and interior work.
              </p>
            </div>
          </div>

          <TracingBeam className="px-2 md:px-4">
            <div className="max-w-3xl mx-auto antialiased space-y-16">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="space-y-4">
                  <span className="inline-block bg-black dark:bg-white text-white dark:text-black rounded-full text-xs px-3 py-1 font-medium">
                    {item.badge}
                  </span>

                  <h2 className="text-2xl font-semibold">{item.title}</h2>

                  <div className="prose prose-sm dark:prose-invert">
                    {item.image &&
                      item.image?.map((image: string, index) => {
                        return (
                          <div className="flex flex-col gap-3" key={index}>
                            <Image
                              src={image}
                              alt="Blog Image"
                              width={1000}
                              height={600}
                              className="rounded-xl mb-6 object-cover w-full"
                            />
                          </div>
                        );
                      })}
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </AnimatedGroup>
      </div>
    </section>
  );
}

const dummyContent = [
  {
    title: "Terrace Waterproofing - Bidar",
    description: (
      <>
        <p>
          Successfully completed waterproofing on 5 premium bungalows in Bidar.
          High-quality membrane application and curing. Durable and leak-proof
          for 10+ years.
        </p>
        <p>
          Our team ensured proper slope design, crack filling, chemical
          layering, and UV protection. Clients praised timely delivery and
          durability.
        </p>
      </>
    ),
    badge: "Bidar Project",
    image: [
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416367/WhatsApp_Image_2025-07-12_at_12.59.43_PM_gvh7de.jpg",
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101692/IMG_20250721_180427_ay7qo0.jpg",
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416735/WhatsApp_Image_2025-07-12_at_1.00.50_PM_guqkyp.jpg",
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101693/IMG_20250721_180623_punevd.jpg",
    ],
  },
  {
    title: "Interior Work - Modular Kitchen",
    description: (
      <>
        <p>
          Modular kitchen installation for a 4BHK home in Gulbarga. Finished in
          20 days with German hinges, soft-close drawers, and Italian finish.
        </p>
      </>
    ),
    badge: "Interior",
    image: [
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416367/WhatsApp_Image_2025-07-12_at_1.00.26_PM_lq0fyo.jpg",
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101691/IMG_20250721_180233_py5inw.jpg",
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101689/IMG_20250721_180250_djrzfh.jpg"
    ],
  },
  {
    title: "Civil Renovation - Bathroom + Tiles",
    description: (
      <>
        <p>
          Civil renovation project in Basavakalyan. Fully redone bathroom, new
          tile fittings, CPVC plumbing, and electrical work in 15 days.
        </p>
      </>
    ),
    badge: "Civil",
    image: [
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416737/WhatsApp_Image_2025-07-12_at_1.00.44_PM_1_ev1nhd.jpg",
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416737/WhatsApp_Image_2025-07-12_at_1.00.44_PM_plld2e.jpg",
      "https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416736/WhatsApp_Image_2025-07-12_at_1.00.45_PM_yws1yu.jpg",
    ],
  },
];
