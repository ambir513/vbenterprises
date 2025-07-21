"use client";

import dynamic from "next/dynamic";

const Quotation = dynamic(() => import("../../components/Quotation"), {
  loading: () => <p className="text-center h-screen pt-20"></p>,
});

export default function HelpPageWrapper() {
  return <Quotation />;
}
