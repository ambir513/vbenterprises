"use client";

import dynamic from "next/dynamic";

const TeamContent = dynamic(() => import("../../components/TeamContent"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <TeamContent />;
}
