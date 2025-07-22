import { Link } from "lucide-react";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  Crafted?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "/faq" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "/help" },
      { name: "Sales", href: "/sales" },
      { name: "Advertise", href: "/advertise" },
      { name: "Privacy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms and Conditions", href: "/terms-condition" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Advertise", href: "/advertise" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaWhatsapp className="size-5" />,
    href: "https://wa.me/+919833784582",
    label: "Whatsapp",
  },
  {
    icon: <FaFacebook className="size-5" />,
    href: "https://www.facebook.com/vishwanathc.biradar",
    label: "Facebook",
  },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center gap-2 ${className} `}
    >
      <div className="rounded-md overflow-hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 45 45"
          fill="none"
        >
          <rect width="45" height="45" fill="white" />
          <path
            d="M12.892 15.4545L16.4077 26.5057H16.5426L20.0653 15.4545H23.4744L18.4602 30H14.4972L9.47585 15.4545H12.892Z"
            fill="#F5004F"
          />
          <path
            d="M25.2251 30V15.4545H31.049C32.1191 15.4545 33.0116 15.6132 33.7266 15.9304C34.4415 16.2476 34.9789 16.688 35.3388 17.2514C35.6986 17.8101 35.8786 18.4541 35.8786 19.1832C35.8786 19.7514 35.7649 20.2509 35.5376 20.6818C35.3104 21.108 34.9979 21.4583 34.6001 21.733C34.2071 22.0028 33.7573 22.1946 33.2507 22.3082V22.4503C33.8047 22.474 34.3232 22.6302 34.8061 22.919C35.2938 23.2079 35.6892 23.6127 35.9922 24.1335C36.2952 24.6496 36.4467 25.2652 36.4467 25.9801C36.4467 26.7519 36.255 27.4408 35.8714 28.0469C35.4927 28.6482 34.9316 29.1241 34.1882 29.4744C33.4448 29.8248 32.5286 30 31.4396 30H25.2251ZM28.3004 27.4858H30.8075C31.6645 27.4858 32.2895 27.3224 32.6825 26.9957C33.0755 26.6643 33.272 26.224 33.272 25.6747C33.272 25.2723 33.175 24.9171 32.9808 24.6094C32.7867 24.3016 32.5097 24.0601 32.1499 23.8849C31.7947 23.7098 31.371 23.6222 30.8786 23.6222H28.3004V27.4858ZM28.3004 21.5412H30.5803C31.0017 21.5412 31.3757 21.4678 31.7024 21.321C32.0339 21.1695 32.2943 20.9564 32.4837 20.6818C32.6778 20.4072 32.7749 20.0781 32.7749 19.6946C32.7749 19.169 32.5878 18.7453 32.2138 18.4233C31.8445 18.1013 31.3189 17.9403 30.6371 17.9403H28.3004V21.5412Z"
            fill="#FCB61C"
          />
          <rect
            width="0.757886"
            height="34.5154"
            transform="matrix(0.548442 0.836188 -0.700382 0.713768 35.4863 9)"
            fill="white"
          />
          <rect
            width="0.757886"
            height="34.919"
            transform="matrix(0.548442 0.836188 -0.700382 0.713768 34.4863 8)"
            fill="white"
          />
        </svg>
      </div>
      <p className="text-lg font-semibold">Enterprises</p>
    </div>
  );
};

export const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "VB Enterprises delivers trusted interior renovation and construction services across India.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 vbenterprises.work. All rights reserved.",
  Crafted = "Crafted by Amar Biradar",
}: Footer7Props) => {
  return (
    <section className="sm:px-32 px-10 sm:py-10 py-5">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6  lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Logo />
            </div>
            <p className="sm:w-[70%] w-full text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-4 grid-cols-2 lg:gap-20 mb-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{Crafted}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            <p className="order-2 lg:order-1">{copyright}</p>
          </ul>
        </div>
      </div>
    </section>
  );
};
