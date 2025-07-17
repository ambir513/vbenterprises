"use client";

import dynamic from "next/dynamic";

const HelpContent = dynamic(() => import("../../components/HelpContent"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <HelpContent />;
}
