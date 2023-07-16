import { ReactNode } from "react";

import { Text as ChakraText } from "@chakra-ui/react";

export type MarkerProps = {
  children: ReactNode;
};
export const Marker = ({ children }: MarkerProps) => {
  return (
    <ChakraText
      backgroundColor="black.primary"
      color="white.primary"
      display="inline-flex"
      px={2}
    >
      {children}
    </ChakraText>
  );
};
