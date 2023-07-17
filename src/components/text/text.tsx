import { ReactNode } from "react";

import { Text as ChakraText } from "@chakra-ui/react";

const valiants = {
  primary: {
    color: "black.primary",
  },
  secondary: {
    color: "white.primary",
  },
};
export type TextProps = {
  children: ReactNode;
  valiant: keyof typeof valiants;
};

export const Text = ({ children, valiant }: TextProps) => {
  return <ChakraText {...valiants[valiant]}>{children}</ChakraText>;
};
