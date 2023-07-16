import { ReactNode } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

const variants = {
  primary: {
    color: "black.primary",
    borderColor: "black.primary",
    backgroundColor: "transparent",
  },
  secondary: {
    color: "white.primary",
    borderColor: "white.primary",
    backgroundColor: "transparent",
  },
  warning: {
    color: "red.primary",
    borderColor: "red.primary",
    backgroundColor: "transparent",
  },
  attention: {
    color: "black.primary",
    borderColor: "yellow.primary",
    backgroundColor: "yellow.primary",
  },
};
export type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  type?: "button" | "submit" | "reset";
};
export const Button = ({
  variant = "primary",
  type = "button",
  children,
}: ButtonProps) => {
  return (
    <ChakraButton
      border="solid"
      borderRadius="none"
      borderWidth={2}
      font-size="2xl"
      fontStyle="italic"
      width="100%"
      {...variants[variant]}
      type={type}
    >
      {children}
    </ChakraButton>
  );
};
