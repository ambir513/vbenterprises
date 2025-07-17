"use client";

import dynamic from "next/dynamic";

const Blog = dynamic(() => import("../../components/Blog"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Blog />;
}
