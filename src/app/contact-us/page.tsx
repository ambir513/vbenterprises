"use client";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../../components/Contact"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Contact />;
}
