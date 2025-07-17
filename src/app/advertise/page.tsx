"use client";

import dynamic from "next/dynamic";

const Advertise = dynamic(() => import("../../components/Advertise"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Advertise />;
}
