"use client";
import { DotPatternDemo } from "@/components/Dot";
import { RealEstateCard } from "@/components/ImageCart";

import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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

export default function Quotation() {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();
  const email = user?.emailAddresses[0]?.emailAddress;
  console.log(user);
  useEffect(() => {
    sendEmail();
  }, []);
  async function sendEmail() {
    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      console.log(res.json());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isSignedIn) return null; // or a loading skeleton

  return (
    <div className="flex flex-col  items-center h-fit w-full">
      <AnimatedGroup variants={transitionVariants}>
        <DotPatternDemo />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 place-items-center">
          <RealEstateCard
            images={[
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101692/IMG_20250721_180427_ay7qo0.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101690/IMG_20250721_180514_ba8eye.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101693/IMG_20250721_180538_hq02mw.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101691/IMG_20250721_180353_i1mux5.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101692/IMG_20250721_180711_e7p1kc.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101691/IMG_20250721_180408_uhisis.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101693/IMG_20250721_180623_punevd.jpg",
            ]}
            title="Terrace Waterproofing with Decorative Mosaic Finish"
            year="Jan 2025"
            city="Bidar"
          />
          <RealEstateCard
            images={[
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101688/IMG_20250721_180034_cfqndh.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101690/IMG_20250721_180021_lyqf91.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101691/IMG_20250721_180128_ohayi0.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101688/IMG_20250721_180046_h5efk2.jpg",
            ]}
            title="RCC Curved Bench(sitting) Construction"
            year="May 2022"
            city="Mumbai"
          />
          <RealEstateCard
            images={[
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101690/IMG_20250721_175829_jzhwck.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101689/IMG_20250721_175633_dmxqjr.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101689/IMG_20250721_175844_vi5kim.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101689/IMG_20250721_175928_fxkguf.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101692/IMG_20250721_175807_kws0zf.jpg",
            ]}
            title="Neat Plumbing Layout with Protective Brick Barrier Work"
            year="May 2025"
            city="Bidar"
          />
          <RealEstateCard
            images={[
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101693/IMG_20250721_180334_fsmlbe.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101691/IMG_20250721_180308_hnjtmq.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101689/IMG_20250721_180250_djrzfh.jpg",
              "https://res.cloudinary.com/dvvxpzajh/image/upload/v1753101691/IMG_20250721_180233_py5inw.jpg",
            ]}
            title="Premium Marble Wall Cladding with Inbuilt Storage Finish"
            year="2021"
            city="Mumbai"
          />
        </div>
      </AnimatedGroup>
    </div>
  );
}
