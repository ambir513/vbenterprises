"use client";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

export default function Help() {
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
                  Help & Support
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: July 16, 2025
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <p>
                  Welcome to the Help & Support page of{" "}
                  <strong>VB Enterprises</strong>. This page is designed to
                  assist you with common questions and guide you on how to
                  connect with us regarding our services and portfolio.
                </p>

                <h2>What Is This Website?</h2>
                <p>
                  This is the official portfolio site of Vishwanath Biradar,
                  showcasing interior and civil work projects completed in
                  Mumbai and nearby areas. It is not an e-commerce site, and we
                  do not sell products online.
                </p>

                <h2>Common Topics</h2>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Need service info?</strong> Visit our{" "}
                    <a
                      href="/contact-us"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      Contact Page
                    </a>{" "}
                    to request project details or consultations.
                  </li>
                  <li>
                    <strong>Looking for our experience?</strong> Check out our{" "}
                    <a
                      href="/about"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      About Page
                    </a>{" "}
                    and{" "}
                    <a
                      href="/team"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      Team Page
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Want to work with us?</strong> See job openings on
                    our{" "}
                    <a
                      href="/careers"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      Careers Page
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Need terms or policies?</strong> Visit the{" "}
                    <a
                      href="/terms-condition"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      Terms
                    </a>{" "}
                    or{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      Privacy Policy
                    </a>
                    .
                  </li>
                </ul>

                <h2>What Services Do You Offer?</h2>
                <p>
                  VB Enterprises specializes in complete interior work
                  including:
                </p>
                <ul className="list-disc pl-6">
                  <li>Civil construction & remodeling</li>
                  <li>Modular interiors and custom designs</li>
                  <li>Plumbing and electrical installations</li>
                  <li>Specialized waterproofing solutions</li>
                </ul>

                <h2>Where Have You Worked?</h2>
                <p>We have completed numerous projects in Mumbai including:</p>
                <ul className="list-disc pl-6">
                  <li>21-flat interior work in Santacruz (2019)</li>
                  <li>Multiple projects in Andheri, Bandra, and Dadar</li>
                </ul>

                <h2>Still Need Help?</h2>
                <p>
                  If your question isn't answered here, feel free to contact us
                  directly. We are always happy to assist you.
                </p>

                <h2>Contact Information</h2>
                <ul className="list-none space-y-2">
                  <li>
                    📞 Call or WhatsApp:{" "}
                    <a href="tel:+919833784528">
                      <strong>9833784528</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support@vbenterprises.work"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      support@vbenterprises.work
                    </a>
                  </li>
                  <li>
                    <strong>Location:</strong> Mumbai, Maharashtra, India
                  </li>
                </ul>

                <p>
                  Thank you for visiting VB Enterprises. We look forward to
                  working with you or helping in any way we can.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
