"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("../../components/About"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <About />;
}
