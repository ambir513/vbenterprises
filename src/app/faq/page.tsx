"use client";

import dynamic from "next/dynamic";

const Fsq = dynamic(() => import("../../components/Fsq"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Fsq />;
}
