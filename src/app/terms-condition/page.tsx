import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

export default function Terms() {
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
                  Terms and Conditions
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: July 16, 2025
                </p>
              </div>
              <div className="space-y-6 mt-4">
                <p>
                  Welcome to VB Enterprises. This website is a professional
                  portfolio for showcasing the work of{" "}
                  <strong>Vishwanath Biradar</strong>, a seasoned civil and
                  interior contractor with over <strong>25 years</strong> of
                  experience delivering turnkey interior projects across major
                  cities in India.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  1. Purpose of the Website
                </div>
                <p>
                  This site is designed to present completed projects in civil
                  contracting, total interior work, and waterproofing solutions.
                  It serves as a digital portfolio to highlight skills and
                  craftsmanship — not as a service portal or commercial
                  platform.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  2. Scope of Work Shown
                </div>
                <p>
                  Projects showcased on this site include complete interior
                  contracting, such as:
                </p>
                <ul>
                  <li>Modular interiors and carpentry</li>
                  <li>Electrical installations and fittings</li>
                  <li>Plumbing and sanitation systems</li>
                  <li>False ceiling and POP works</li>
                  <li>Flooring, painting, and tiling</li>
                  <li>
                    Expert <strong>waterproofing solutions</strong> for
                    basements, bathrooms, and terraces
                  </li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  3. Ownership & Copyright
                </div>
                <p>
                  All project images, text, and content on this site are the
                  intellectual property of VB Enterprises unless otherwise
                  credited. Reproduction, distribution, or usage of any content
                  without explicit permission is strictly prohibited.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  4. No Commercial Relationship
                </div>
                <p>
                  Viewing the content of this site does not establish a
                  commercial relationship. For official queries, collaborations,
                  or service requests, you must contact VB Enterprises directly
                  via the details provided.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  5. Accuracy of Information
                </div>
                <p>
                  We aim to provide accurate representations of completed
                  projects, but we do not guarantee absolute accuracy in all
                  visuals or descriptions. Project appearances, materials, and
                  specifications may differ in real life.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  6. Third-Party Links
                </div>
                <p>
                  This website may link to third-party sites or profiles (e.g.,
                  directories or social platforms). VB Enterprises is not
                  responsible for external content, policies, or updates.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  7. Limitation of Liability
                </div>
                <p>
                  VB Enterprises will not be liable for any loss or damage
                  resulting from the use of this website, including reliance on
                  its content or temporary unavailability of access.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  8. Updates to These Terms
                </div>
                <p>
                  We reserve the right to update or revise these Terms and
                  Conditions at any time without notice. Continued use of this
                  site indicates your acceptance of the current version.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  9. Contact Information
                </div>
                <p>
                  For inquiries about the content of this website or to discuss
                  a project, you may reach us at:
                </p>
                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:contact@vbenterprises.work">
                      contact@vbenterprises.work
                    </a>
                  </li>
                  <li className="flex mt-2 items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-phone"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
                    </svg>
                    <p> Phone: +91-9833784528</p>
                  </li>
                  <li className="flex mt-2 items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <p>Location: Mumbai, India</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
