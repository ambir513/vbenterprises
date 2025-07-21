import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import { HeroHeader } from "@/components/hero-section-1";
import { ClerkWithTheme } from "@/utils/ClerkWithTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VB Enterprises - Interior Civil Contractor",
  description:
    "VB Enterprises is a trusted interior civil contracting firm offering top-quality residential and commercial renovation, construction, and design services across India.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClerkWithTheme>
              <HeroHeader />
              {children}
              <Footer />
            </ClerkWithTheme>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
