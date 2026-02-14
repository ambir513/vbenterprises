"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

const bentoImages = [
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088094/WhatsApp_Image_2026-02-14_at_9.24.56_PM_zjyw82.jpg",
    alt: "Interior project showcase 1",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088093/WhatsApp_Image_2026-02-14_at_9.24.56_PM_1_cbwd00.jpg",
    alt: "Interior project showcase 2",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088094/WhatsApp_Image_2026-02-14_at_9.24.54_PM_edpjcf.jpg",
    alt: "Interior project showcase 3",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088092/WhatsApp_Image_2026-02-14_at_9.25.03_PM_qx281b.jpg",
    alt: "Interior project showcase 4",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088080/WhatsApp_Image_2026-02-14_at_9.25.04_PM_phqkp6.jpg",
    alt: "Interior project showcase 5",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088073/WhatsApp_Image_2026-02-14_at_9.25.06_PM_abto31.jpg",
    alt: "Interior project showcase 6",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088073/WhatsApp_Image_2026-02-14_at_9.25.08_PM_rqj0tk.jpg",
    alt: "Interior project showcase 7",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088073/WhatsApp_Image_2026-02-14_at_9.25.10_PM_dzad18.jpg",
    alt: "Interior project showcase 8",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088072/WhatsApp_Image_2026-02-14_at_9.25.17_PM_k5uthn.jpg",
    alt: "Interior project showcase 9",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088072/WhatsApp_Image_2026-02-14_at_9.25.13_PM_1_hmyham.jpg",
    alt: "Interior project showcase 10",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088072/WhatsApp_Image_2026-02-14_at_9.25.18_PM_avse8d.jpg",
    alt: "Interior project showcase 11",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088072/WhatsApp_Image_2026-02-14_at_9.25.13_PM_cdmum2.jpg",
    alt: "Interior project showcase 12",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088072/WhatsApp_Image_2026-02-14_at_9.25.11_PM_xqsofo.jpg",
    alt: "Interior project showcase 13",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://res.cloudinary.com/drn7svaxk/image/upload/v1771088072/WhatsApp_Image_2026-02-14_at_9.25.12_PM_dolhfg.jpg",
    alt: "Interior project showcase 14",
    colSpan: 2,
    rowSpan: 1,
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
export default function Project() {
  return (
    <section className="py-24 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6 md:w-[1100px] mx-auto">
        <AnimatedGroup variants={transitionVariants}>
        

          
          {/* Bento Image Gallery */}
          <div className="mt-16 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-center">
              Our Recent Work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-8">
              A glimpse into our latest interior, waterproofing, and civil projects across Mumbai and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-3 max-w-7xl mx-auto">
              {bentoImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative group rounded-xl overflow-hidden cursor-pointer aspect-[9/16] md:aspect-auto col-span-1 row-span-1 ${
                    img.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
                  } ${img.rowSpan === 2 ? "md:row-span-2" : "md:row-span-1"}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

  <div className="prose prose-gray dark:prose-invert max-w-none mt-16">
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
