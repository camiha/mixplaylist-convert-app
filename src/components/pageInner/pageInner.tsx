import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

export type PageInnerProps = {
  children: ReactNode;
};

export const PageInner = ({ children }: PageInnerProps) => {
  return (
    <Box height="full" maxWidth="container.md" mx="auto" px={4} py={16}>
      {children}
    </Box>
  );
};
