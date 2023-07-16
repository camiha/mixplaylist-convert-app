import { ReactNode } from "react";

import { Text as ChakraText } from "@chakra-ui/react";

export type DescriptionProps = {
  children: ReactNode;
};

export const Description = ({ children }: DescriptionProps) => {
  return (
    <ChakraText
      alignItems="flex-start"
      as="p"
      color="black.primary"
      display="inline-flex"
      flexDirection="column"
      fontSize="xl"
      fontWeight="normal"
      gap={2}
      position="relative"
    >
      {children}
    </ChakraText>
  );
};
