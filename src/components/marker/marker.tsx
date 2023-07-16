import { ReactNode } from "react";
import { Text as ChakraText } from "@chakra-ui/react";

export type MarkerProps = {
  children: ReactNode;
};
export const Marker = ({ children }: MarkerProps) => {
  return (
    <ChakraText
      display={"inline-flex"}
      px={2}
      backgroundColor={"black.primary"}
      color={"white.primary"}
    >
      {children}
    </ChakraText>
  );
};
