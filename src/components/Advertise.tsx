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
                  Advertise With Us
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: July 16, 2025
                </p>
              </div>
              <div className="space-y-6 mt-4">
                <p>
                  VB Enterprises is a professional portfolio website showcasing
                  over 25+ years of expertise in interior design, civil
                  contracting, and waterproofing solutions by
                  <strong> Vishwanath Biradar</strong>. We offer advertising
                  opportunities for brands, tools, materials, and services that
                  align with our work in construction, design, and
                  infrastructure.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  1. Why Advertise With Us?
                </div>
                <p>
                  Our audience includes homeowners, architects, builders,
                  interior designers, and real estate professionals across India
                  who regularly visit to explore completed projects and design
                  inspiration.
                </p>
                <ul>
                  <li>Targeted audience in the civil and interior domain</li>
                  <li>Trusted brand with a long-standing industry presence</li>
                  <li>Authentic portfolio traffic, not driven by ads</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  2. Advertising Options
                </div>
                <p>
                  We offer flexible ad placements and promotional options for
                  relevant brands and services:
                </p>
                <ul>
                  <li>Sponsored blog posts or articles</li>
                  <li>Product placement within case studies</li>
                  <li>Sidebar banner ads or CTA blocks</li>
                  <li>Brand mentions or testimonials (if genuinely used)</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  3. Content Guidelines
                </div>
                <p>
                  We only partner with brands or services that match the quality
                  and professionalism expected by our clients and audience. We
                  do not accept ads for:
                </p>
                <ul>
                  <li>Gambling or betting websites</li>
                  <li>Adult or offensive content</li>
                  <li>Unverified or misleading services</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  4. Rates & Terms
                </div>
                <p>
                  Advertising rates depend on the type of placement, duration,
                  and creative requirements. All partnerships will be discussed
                  on a case-by-case basis and must be approved before
                  publishing.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  5. Tracking & Analytics
                </div>
                <p>
                  We can offer basic performance insights such as impressions
                  and click-through rates upon request. We do not use
                  third-party ad networks—everything is manually managed for
                  transparency and brand fit.
                </p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  6. Let’s Work Together
                </div>
                <p>
                  If you believe your brand or service would benefit from being
                  featured on VB Enterprises, we’d love to hear from you. Please
                  include as many details as possible about your goals,
                  products, and intended ad format.
                </p>

                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:ads@vbenterprises.work">
                      ads@vbenterprises.work
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
                  <li>
                    Include: Brand info, sample creatives, duration, and budget
                    range (optional)
                  </li>
                </ul>

                <p>
                  We reserve the right to accept or reject any advertising
                  request based on relevance, brand alignment, and ethical
                  standards.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
