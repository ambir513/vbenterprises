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
    <div className="flex justify-center items-center ">
      <div className="py-6 md:py-12 lg:py-16 flex justify-center items-center md:w-[1100px]">
        <AnimatedGroup variants={transitionVariants}>
          <div className="flex justify-center items-center py-12">
            <div className="py-6 md:py-12 lg:py-16 flex justify-center items-center md:w-[1100px]">
              <div className="container px-4 md:px-6">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <div className="pb-4 space-y-2 border-b border-gray-200 dark:border-gray-800">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Contact Us
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      We'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6 mt-4">
                    <p>
                      Whether you have a project in mind, need professional
                      waterproofing or full interior work, or simply want to
                      discuss your requirements — feel free to reach out to us
                      using the information below.
                    </p>

                    <div className="text-xl font-semibold mt-8 mb-2">
                      Contact Information
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
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
                          className="icon icon-tabler icon-tabler-mail"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H3a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2z" />
                          <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <p>
                          Email 1:{" "}
                          <a
                            href="mailto:quotation@vbenterprises.work"
                            className="text-blue-600 dark:text-blue-400 underline"
                          >
                            quotation@vbenterprises.work
                          </a>
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
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
                          className="icon icon-tabler icon-tabler-mail"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H3a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2z" />
                          <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <p>
                          Email 2:{" "}
                          <a
                            href="mailto:contact@vbenterprises.work"
                            className="text-blue-600 dark:text-blue-400 underline"
                          >
                            contact@vbenterprises.work
                          </a>
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
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
                        <p>
                          Phone:{" "}
                          <a
                            href="tel:+919833784528"
                            className="underline text-blue-600 dark:text-blue-400"
                          >
                            +91-9833784528
                          </a>
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
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
                          className="icon icon-tabler icon-tabler-map-pin"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <p>Location: Mumbai, India</p>
                      </li>
                    </ul>

                    <div className="text-xl font-semibold mt-8 mb-2">
                      Business Hours
                    </div>
                    <ul>
                      <li>Monday – Saturday: 9:00 AM – 6:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>

                    <div className="text-xl font-semibold mt-8 mb-2">
                      Optional: Contact Form
                    </div>
                    <p>
                      If you’d like to leave us a message directly through the
                      website, we will soon add a form feature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
