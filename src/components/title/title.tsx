import { ReactNode } from "react";

import { Heading as ChakraHeading } from "@chakra-ui/react";

export type TitleProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};
export const Title = ({ level, children }: TitleProps) => {
  return (
    <ChakraHeading
      alignItems="flex-start"
      as={level}
      color="black.primary"
      display="inline-flex"
      flexDirection="column"
      fontStyle="italic"
      fontWeight="normal"
      gap={2}
      position="relative"
    >
      {children}
    </ChakraHeading>
  );
};
