"use client";

import dynamic from "next/dynamic";

const Careers = dynamic(() => import("../../components/Careers"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Careers />;
}
