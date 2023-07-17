import { ReactNode } from "react";

import { Text as ChakraText } from "@chakra-ui/react";

const variants = {
  primary: {
    color: "black.primary",
  },
  secondary: {
    color: "white.primary",
  },
};
export type TextProps = {
  children: ReactNode;
  variant: keyof typeof valiants;
};

export const Text = ({ children, variant }: TextProps) => {
  return (
    <ChakraText fontSize="sm" {...variants[variant]}>
      {children}
    </ChakraText>
  );
};
