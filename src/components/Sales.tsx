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
                  Sales Information
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: July 16, 2025
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <p>
                  <strong>VB Enterprises</strong> is a professional civil and
                  interior contractor based in Mumbai, focused on delivering
                  high-quality workmanship in interior design, civil
                  renovations, waterproofing, plumbing, electrical
                  installations, and more.
                </p>

                <p>
                  This website is strictly a <strong>portfolio site</strong>{" "}
                  intended to showcase the work and expertise of Vishwanath
                  Biradar and his team. We do{" "}
                  <strong>not sell any products or services</strong> directly
                  through this website.
                </p>

                <h2>No Online Sales</h2>
                <ul className="list-disc pl-6">
                  <li>We do not list or sell physical products.</li>
                  <li>
                    There is no e-commerce or payment processing enabled on this
                    site.
                  </li>
                  <li>
                    All service inquiries are handled manually through our{" "}
                    <a
                      href="/contact-us"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      Contact Page
                    </a>
                    .
                  </li>
                </ul>

                <h2>Service-Oriented Approach</h2>
                <p>
                  While we do not sell items online, we welcome inquiries about
                  civil or interior projects. If you are interested in hiring us
                  for your upcoming residential or commercial project in Mumbai
                  or nearby areas, please get in touch via phone or email.
                </p>

                <h2>Transparency and Trust</h2>
                <p>
                  We believe in building trust through transparency. Our past
                  projects—such as full interior work in 21 flats in Santacruz
                  in 2019 and work in areas like Andheri, Bandra, and
                  Dadar—stand as a testament to our quality and reliability.
                </p>

                <p>
                  Thank you for visiting VB Enterprises. If you are looking for
                  experienced professionals for civil and interior work, feel
                  free to{" "}
                  <a
                    href="/contact-us"
                    className="text-blue-600 underline dark:text-blue-400"
                  >
                    reach out
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
