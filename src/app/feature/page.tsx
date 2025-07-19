"use client";

import dynamic from "next/dynamic";

const Feature = dynamic(() => import("../../components/Feature"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Feature />;
}
