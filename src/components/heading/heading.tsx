import { ReactNode } from "react";

import { Heading as ChakraHeading } from "@chakra-ui/react";

export type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};

export const Heading = ({ level, children }: HeadingProps) => {
  return (
    <ChakraHeading
      alignItems="flex-start"
      as={level}
      color="black.primary"
      display="inline-flex"
      flexDirection="column"
      fontSize="2xl"
      fontWeight="normal"
      gap={2}
      position="relative"
    >
      {children}
    </ChakraHeading>
  );
};
