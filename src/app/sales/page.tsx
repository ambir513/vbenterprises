"use client";

import dynamic from "next/dynamic";

const Sales = dynamic(() => import("../../components/Sales"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Sales />;
}
