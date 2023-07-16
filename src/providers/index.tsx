"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "react-error-boundary";

import { API_MOCKING, IS_DEVELOPMENT } from "@/config/constants";
import { theme } from "@/config/theme";
import { MSWWrapperProps } from "@/lib/msw";
import { queryClient } from "@/lib/react-query";

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import("@/lib/msw").then(({ MSWWrapper }) => MSWWrapper),
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ErrorBoundary
          fallback={<div>Something went wrong!</div>}
          onError={console.error}
        >
          <QueryClientProvider client={queryClient}>
            {IS_DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
            {API_MOCKING ? <MSWWrapper>{children}</MSWWrapper> : children}
          </QueryClientProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </CacheProvider>
  );
}
