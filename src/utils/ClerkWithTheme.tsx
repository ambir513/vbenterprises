"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ClerkWithTheme({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // ✅ Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !resolvedTheme) return null;

  const baseTheme = resolvedTheme === "dark" ? dark : light;

  return (
    <ClerkProvider
      appearance={{
        baseTheme,
      }}
    >
      {children}
    </ClerkProvider>
  );
}
