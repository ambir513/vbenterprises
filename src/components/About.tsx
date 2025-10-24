import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { ImageGeneration } from "./ui/ai-chat-image-generation-1";
import SpotifyAlbumEmbed from "./SpotifyAlbumEmbed";

export default function About() {
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
            <div className="prose prose-gray w-fit dark:prose-invert">
              <div className="pb-4 space-y-2 border-b border-gray-200 dark:border-gray-800">
                <div className="flex md:flex-row flex-col justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      About VB Enterprises
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Last updated: July 16, 2025
                    </p>
                  </div>
                  <div className="">
                    <SpotifyAlbumEmbed />
                  </div>
                </div>
              </div>
              <div className="space-y-6 mt-4">
                <div className="flex md:flex-row flex-col justify-center items-center gap-3">
                  <div className="pr-0 sm:mr-0 mr-6">
                    <ImageGeneration>
                      <div className="md:w-[290px] select-none sm:w-full w-[300px] h-[300px] select-none overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="https://i.pinimg.com/736x/c0/b0/af/c0b0af6922628f9c47edf29113a8e287.jpg"
                          alt="Vishwanath Biradar"
                          width={500}
                          height={300}
                          className="object-cover scale-102   select-none pb-[1600px] transition-transform duration-300"
                        />
                      </div>
                    </ImageGeneration>
                  </div>
                  <div className="flex flex-col sm:gap-1 gap-4 items-center ">
                    <p className="mt-2">
                      <strong>VB Enterprises</strong> is a professional
                      portfolio that showcases the decades-long craftsmanship
                      and commitment of <strong>Vishwanath Biradar</strong> — a
                      highly skilled civil and interior contractor with over{" "}
                      <strong>25 years of experience</strong> in delivering
                      full-scale construction and renovation projects across
                      India’s major cities.
                    </p>
                    <div className="">
                      <div className="text-xl font-semibold mt-2 mb-2">
                        Our Mission
                      </div>
                      <p>
                        To deliver quality-driven, functional, and aesthetically
                        appealing interior and civil construction solutions
                        while maintaining transparency, durability, and trust
                        with every client.
                      </p>
                    </div>
                    <div className="">
                      <div className="text-xl font-semibold mt-4 mb-2">
                        What We Do
                      </div>
                      <p>
                        We offer complete end-to-end interior contracting
                        services, backed by technical skill and decades of
                        hands-on project management. Our work includes:
                      </p>
                    </div>
                  </div>
                </div>

                <ul>
                  <li>Full interior design and execution</li>
                  <li>False ceiling, modular kitchens, tiling & painting</li>
                  <li>Electrical and plumbing installation</li>
                  <li>Residential and commercial civil contracting</li>
                  <li>
                    Specialist <strong>waterproofing solutions</strong> for
                    bathrooms, basements, and terraces
                  </li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  Experience Across Major Cities
                </div>
                <p>
                  Based in Mumbai, VB Enterprises has successfully completed
                  projects in metro cities including:
                </p>
                <ul>
                  <li>Mumbai</li>
                  <li>Bidar </li>
                  <li>Bangalore</li>
                  <li>Jaipur</li>
                  <li>Gujarat</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  Why Choose VB Enterprises?
                </div>
                <ul>
                  <li>✅ 25+ years of trusted experience</li>
                  <li>
                    ✅ Complete civil + interior + MEP (Electrical & Plumbing)
                  </li>
                  <li>✅ Affordable waterproofing with guaranteed results</li>
                  <li>✅ Transparent workflow and reliable delivery</li>
                  <li>✅ Personalized approach for each project</li>
                </ul>

                <div className="text-xl font-semibold mt-8 mb-2">
                  Founder’s Message
                </div>
                <p>
                  “Our goal has always been simple — to build spaces that last,
                  inspire, and reflect true craftsmanship. Every project is a
                  commitment to quality, no matter how big or small.”
                </p>
                <p>— Vishwanath Biradar</p>

                <div className="text-xl font-semibold mt-8 mb-2">
                  Get in Touch
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
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
