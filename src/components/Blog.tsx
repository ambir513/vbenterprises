import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

export default function Advertise() {
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

  return (
    <div className="flex justify-center items-center py-18">
      <div className="py-6 md:py-12 lg:py-16 flex justify-center items-center md:w-[1100px]">
        <AnimatedGroup variants={transitionVariants}>
          <div className="container px-4 md:px-6">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <div className="pb-4 space-y-2 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Blog
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Insights, trends, and tips from 25+ years in civil contracting
                  and interior work.
                </p>
              </div>

              <div className="space-y-10 mt-6">
                <article>
                  <h2 className="text-2xl font-semibold">
                    Top 5 Waterproofing Techniques Used in Modern Construction
                  </h2>
                  <p>
                    Waterproofing is a critical part of construction, especially
                    in cities like Mumbai where humidity and rain can severely
                    impact buildings. In this post, we’ll share industry-proven
                    techniques such as chemical coatings, bituminous membranes,
                    injection grouting, and more.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Published on March 18, 2024
                  </p>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold">
                    Why Good Interior Design Starts with Electrical and Plumbing
                    Planning
                  </h2>
                  <p>
                    Aesthetics are important, but so is functionality. Discover
                    why planning your electrical and plumbing layout during the
                    initial phase saves cost and enhances design flexibility.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Published on February 2, 2024
                  </p>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold">
                    How VB Enterprises Transformed a 2BHK Flat in Andheri in 30
                    Days
                  </h2>
                  <p>
                    A quick look at one of our most efficient residential
                    interior projects — covering modular kitchen fitting,
                    waterproof flooring, POP ceiling work, and energy-efficient
                    lighting.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Published on January 12, 2024
                  </p>
                </article>

                <article>
                  <h2 className="text-2xl font-semibold">
                    Civil Work Challenges in High-Rise Buildings — and How We
                    Solve Them
                  </h2>
                  <p>
                    Working in vertical urban structures brings unique
                    challenges like limited access, load restrictions, and
                    coordination with multiple stakeholders. Learn how our team
                    handles these complexities professionally.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Published on November 28, 2023
                  </p>
                </article>
              </div>

              <div className="pt-10">
                <h3 className="text-xl font-semibold">
                  Want us to cover a specific topic?
                </h3>
                <p>
                  Reach out via our{" "}
                  <a
                    href="/contact-us"
                    className="text-blue-600 underline dark:text-blue-400"
                  >
                    Contact Page
                  </a>{" "}
                  and let us know what you'd like to read about.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
