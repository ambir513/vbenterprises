import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

export default function PrivacyPolicy() {
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
                  Privacy Policy
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: July 16, 2025
                </p>
              </div>
              <div className="space-y-6 mt-4">
                <p>
                  At VB Enterprises, your privacy is important to us. This
                  Privacy Policy outlines the types of information we may
                  collect and how we use, store, and protect it when you visit
                  our website.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  1. Information We Collect
                </div>
                <p>
                  We do not collect any personally identifiable information
                  unless you choose to submit it via our contact form or through
                  direct communication (e.g., email or phone).
                </p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Message content</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  2. How We Use Your Information
                </div>
                <p>
                  Any information you submit is used strictly for communication
                  purposes. We may use it to:
                </p>
                <ul>
                  <li>Respond to inquiries or service requests</li>
                  <li>Provide updates about projects (if requested)</li>
                  <li>Maintain records of communication</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  3. Data Security
                </div>
                <p>
                  We follow industry best practices to protect your information.
                  However, no method of transmission over the internet is 100%
                  secure. We do not share or sell your data to third parties
                  under any circumstances.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  4. Third-Party Services
                </div>
                <p>
                  This website may use basic analytics tools (such as Vercel
                  Analytics or similar) to understand how visitors use the site.
                  These tools may collect non-identifiable information such as:
                </p>
                <ul>
                  <li>Browser type</li>
                  <li>Approximate location</li>
                  <li>Device type</li>
                  <li>Referring pages</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  5. External Links
                </div>
                <p>
                  We may include links to external websites (e.g., project
                  directories or social media). We are not responsible for the
                  privacy practices of those third-party websites.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  6. Cookies
                </div>
                <p>
                  We currently do not use cookies for tracking, advertising, or
                  personalized experiences. If this changes in the future, we
                  will update this policy accordingly.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  7. Children's Privacy
                </div>
                <p>
                  This website is not intended for children under the age of 13.
                  We do not knowingly collect information from minors.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  8. Updates to This Policy
                </div>
                <p>
                  We may update this Privacy Policy from time to time. The
                  latest version will always be available on this page with the
                  date of revision.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  9. Contact Us
                </div>
                <p>
                  If you have any questions or concerns about our privacy
                  practices, feel free to contact us:
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
