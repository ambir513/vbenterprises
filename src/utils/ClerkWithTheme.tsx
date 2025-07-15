"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes"; // ✅ Only dark is available
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

  // Use dark theme for dark mode, default (light) otherwise
  const baseTheme = resolvedTheme === "dark" ? dark : undefined;

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
