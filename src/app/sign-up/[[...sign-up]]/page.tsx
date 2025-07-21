"use client";
import { SignUp } from "@clerk/nextjs";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
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
        type: "spring",
        bounce: 0.3,
        duration: 2,
      },
    },
  },
};
export default function Page() {
  return (
    <div
      className="flex justify-center items-center w-full
      h-fit py-24"
    >
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
            ...transitionVariants,
          },
        }}
      >
        <SignUp />
      </AnimatedGroup>
    </div>
  );
}
