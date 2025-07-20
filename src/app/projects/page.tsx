"use client";

import dynamic from "next/dynamic";

const Project = dynamic(() => import("../../components/Project"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Project />;
}
