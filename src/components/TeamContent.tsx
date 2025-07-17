import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

export default function TeamContent() {
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
                  Meet Our Team
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: July 16, 2025
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <p>
                  At <strong>VB Enterprises</strong>, we may be a small team—but
                  we deliver big results. With over 25+ years of combined
                  experience in civil contracting and interior design, our team
                  consists of dedicated professionals who bring skill,
                  precision, and passion to every project.
                </p>

                <p>
                  While we value transparency and credibility, we do not list
                  individual team member names on this page to respect their
                  privacy. However, every project we complete is a direct result
                  of their dedication and hard work.
                </p>

                <h2>What Makes Our Team Special?</h2>
                <ul className="list-disc pl-6">
                  <li>Expertise in full-scope interior and civil works</li>
                  <li>
                    Specialized skills in plumbing, electrical, and
                    waterproofing
                  </li>
                  <li>
                    Hands-on experience with projects in Mumbai suburbs like
                    Santacruz, Andheri, Bandra, and Dadar
                  </li>
                  <li>
                    Flexible, reliable, and committed to meeting client
                    expectations
                  </li>
                  <li>On-site coordination and professional supervision</li>
                </ul>

                <h2>Our Philosophy</h2>
                <p>
                  We believe in quality over quantity. Whether it's a single
                  flat renovation or a full building’s waterproofing solution,
                  our small team ensures every project gets personalized
                  attention and detailed workmanship.
                </p>

                <h2>Looking to Join?</h2>
                <p>
                  We’re always open to expanding our trusted team with skilled
                  individuals. Visit our{" "}
                  <a
                    href="/careers"
                    className="text-blue-600 underline dark:text-blue-400"
                  >
                    Careers page
                  </a>{" "}
                  to see current openings.
                </p>

                <p>
                  Thank you for trusting VB Enterprises. We’re proud to have a
                  team that treats every project like their own.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
