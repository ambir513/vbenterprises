import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

export default function Contact() {
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
                  Careers at VB Enterprises
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: July 16, 2025
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <p>
                  <strong>VB Enterprises</strong> is always looking to grow our
                  team with passionate and hardworking individuals. We
                  specialize in total interior and civil works including
                  plumbing, electrical, and waterproofing solutions across
                  Mumbai and other major cities. If you want to work on
                  real-world projects with an experienced and trusted company,
                  we welcome your application.
                </p>

                <h2>Why Join Us?</h2>
                <ul className="list-disc pl-6">
                  <li>
                    25+ years of excellence in interior and civil contracting
                  </li>
                  <li>
                    Work on projects in Mumbai suburbs like Santacruz, Andheri,
                    Bandra, and Dadar
                  </li>
                  <li>
                    On-site learning with experts in waterproofing, electricals,
                    and plumbing
                  </li>
                  <li>
                    Opportunities for both skilled professionals and freshers
                  </li>
                </ul>

                <h2>Open Positions</h2>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Site Supervisor</strong> – 2+ years experience
                    managing construction/interior sites
                  </li>
                  <li>
                    <strong>AutoCAD Draughtsman</strong> – Experience in
                    interior layouts and technical drawings
                  </li>
                  <li>
                    <strong>Electricians & Plumbers</strong> – Skilled in
                    apartment, office & site installations
                  </li>
                  <li>
                    <strong>Waterproofing Technicians</strong> – Knowledge of
                    chemical, membrane & injection systems
                  </li>
                  <li>
                    <strong>Helpers / Labourers</strong> – Physically fit, able
                    to support on-site work and material handling
                  </li>
                  <li>
                    <strong>Mistry (Mason Foremen)</strong> – Must have hands-on
                    experience in site supervision, brick work, plastering, tile
                    laying, etc.
                  </li>
                  <li>
                    <strong>Project Coordinator (Office)</strong> – Must be
                    organized and tech-savvy (MS Excel, WhatsApp, Email)
                  </li>
                </ul>

                <h2>Internships & Training</h2>
                <p>
                  We offer short-term and long-term internships for civil
                  engineering, interior design, and architecture students. Learn
                  on-site and earn a valuable certificate of experience.
                </p>

                <h2>Work Locations</h2>
                <ul className="list-disc pl-6">
                  <li>
                    Mumbai suburbs: Santacruz (21 flat interiors completed in
                    2019)
                  </li>
                  <li>Ongoing & past projects in Andheri, Bandra, and Dadar</li>
                  <li>Available for work across Mumbai and Navi Mumbai</li>
                </ul>

                <h2>How to Apply</h2>
                <p>Send your resume or job inquiry to:</p>
                <p>
                  📧{" "}
                  <a
                    href="mailto:support@vbenterprises.work"
                    className="text-blue-600 underline dark:text-blue-400"
                  >
                    support@vbenterprises.work
                  </a>
                </p>
                <p>
                  📞 Call or WhatsApp:{" "}
                  <a href="tel:+919833784528">
                    <strong>9833784528</strong>
                  </a>
                </p>

                <p>
                  We welcome both experienced professionals and energetic
                  newcomers who want to learn and grow with us.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
