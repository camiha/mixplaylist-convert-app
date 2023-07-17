import { ReactNode } from "react";

import { Text as ChakraText } from "@chakra-ui/react";

const variants = {
  black: {
    color: "white.primary",
    backgroundColor: "black.primary",
  },
  green: {
    color: "black.primary",
    backgroundColor: "green.primary",
  },
  greenLight: {
    color: "black.primary",
    backgroundColor: "green.light",
  },
  greenDark: {
    color: "white.primary",
    backgroundColor: "green.dark",
  },
};
export type MarkerProps = {
  children: ReactNode;
  px?: number;
  variant?: keyof typeof variants;
};
export const Marker = ({
  variant = "black",
  px = 2,
  children,
}: MarkerProps) => {
  return (
    <ChakraText {...variants[variant]} display="inline-flex" px={px}>
      {children}
    </ChakraText>
  );
};
