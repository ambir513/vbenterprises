"use client";

import {
  ClerkProvider,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes"; // ✅ Only dark is available
import { useTheme } from "next-themes";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ClerkAvailabilityContext = createContext(true);

export function useClerkAvailability() {
  return useContext(ClerkAvailabilityContext);
}

function isAllowedClerkHost(hostname: string) {
  return hostname === "vbenterprises.work" || hostname.endsWith(".vbenterprises.work");
}

export function ClerkWithTheme({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [clerkEnabled, setClerkEnabled] = useState(false);

  // ✅ Prevent hydration mismatch
  useEffect(() => {
    setClerkEnabled(isAllowedClerkHost(window.location.hostname));
    setIsMounted(true);
  }, []);

  if (!isMounted || !resolvedTheme) return null;

  // Use dark theme for dark mode, default (light) otherwise
  const baseTheme = resolvedTheme === "dark" ? dark : undefined;

  return (
    <ClerkAvailabilityContext.Provider value={clerkEnabled}>
      {clerkEnabled ? (
        <ClerkProvider
          appearance={{
            baseTheme,
          }}
        >
          {children}
        </ClerkProvider>
      ) : (
        children
      )}
    </ClerkAvailabilityContext.Provider>
  );
}
