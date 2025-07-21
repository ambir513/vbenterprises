"use client";

import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - VB Enterprises",
  description:
    "Learn more about VB Enterprises, our mission, values, and the expert team delivering top-quality civil interior solutions.",
};

const About = dynamic(() => import("../../components/About"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <About />;
}
