"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./Theme";
import { TextureButton } from "./ui/texture-button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";
import Image from "next/image";
const transitionVariants = {
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
        type: "spring" as const, // ✅ THIS is important
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} satisfies {
  item: Variants;
};

export function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);
  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      25+ Years of Trusted Work
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1 className="mt-8 mx-auto text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                    Interior Solutions & &nbsp;
                    <span className="w-full">Waterproofing Services</span>
                  </h1>
                  <p className="mx-auto mt-8 sm:w-[600px] w-full sm:text-lg text-sm text-balance ">
                    {/* Reliable waterproofing and interior civil work backed by
                    decades of experience, trust, and craftsmanship. */}
                    Delivering quality interior contracting and waterproofing
                    services backed by trust, skill, and proven project success.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[14px] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Explore Services</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">View Projects</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className={`bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent ${
                    isDark ? "from-45%" : "from-100%"
                  }`}
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416367/WhatsApp_Image_2025-07-12_at_1.00.26_PM_lq0fyo.jpg"
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />

                  <Image
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://res.cloudinary.com/dvvxpzajh/image/upload/v1752416366/WhatsApp_Image_2025-07-12_at_1.00.46_PM_rj35n6.jpg"
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/"
                className="block text-sm duration-150 hover:opacity-75"
              >
                <span> Meet Our Customers</span>

                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
              <div>
                <div>
                  <Image
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    width={80}
                    height={20}
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    width={80}
                    height={16}
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    width={80}
                    height={16}
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    width={80}
                    height={20}
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    width={80}
                    height={20}
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    width={80}
                    height={16}
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-7 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    width={80}
                    height={28}
                  />
                </div>

                <div className="flex">
                  <Image
                    className="mx-auto h-6 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    width={80}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
];

export const HeroHeader = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="sm:hidden flex">
                  <ModeToggle />
                </div>
                {isLoaded ? (
                  user ? (
                    <div className="md:hidden flex  justify-center items-center">
                      <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            userButtonPopoverCard: "sm:ml-0 sm:mt-0 ml-4 mt-5",
                          },
                        }}
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setMenuState(!menuState)}
                      aria-label={
                        menuState == true ? "Close Menu" : "Open Menu"
                      }
                      className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                    >
                      <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                      <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                    </button>
                  )
                ) : null}
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <div className="sm:flex hidden">
                  <ModeToggle />
                </div>

                {isLoaded ? (
                  user ? (
                    <div className="md:flex hidden">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  ) : (
                    <Link href="/sign-in">
                      <TextureButton
                        size="sm"
                        className={`font-semibold transition-all duration-200       
        active:scale-[0.96]   cursor-pointer ${cn(
          `
                    ${isScrolled && "lg:hidden"}`
        )}`}
                        onClick={() => {
                          setTimeout(() => {
                            window.scroll(0, 0);
                            setMenuState((prev) => !prev);
                          }, 500);
                        }}
                      >
                        Sign In
                      </TextureButton>
                    </Link>
                  )
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

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
      <p className="text-sm font-semibold">Enterprises</p>
    </div>
  );
};
