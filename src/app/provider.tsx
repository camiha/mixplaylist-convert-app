"use client";

import { API_MOCKING } from "@/config/constants";
import { MSWWrapperProps } from "@/lib/msw";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import("@/lib/msw").then(({ MSWWrapper }) => MSWWrapper),
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {API_MOCKING ? <MSWWrapper>{children}</MSWWrapper> : children}
      </ChakraProvider>
    </CacheProvider>
  );
}
