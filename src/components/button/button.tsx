import { ReactNode } from "react";

import { Button as ChakraButton } from "@chakra-ui/react";

// TODO: add hover color
const variants = {
  primary: {
    color: "black.primary",
    borderColor: "black.primary",
    backgroundColor: "transparent",
    _hover: { bg: "green.light" },
  },
  secondary: {
    color: "white.primary",
    borderColor: "white.primary",
    backgroundColor: "transparent",
    _hover: { bg: "green.light" },
  },
  warning: {
    color: "red.primary",
    borderColor: "red.primary",
    backgroundColor: "transparent",
    _hover: { bg: "green.light" },
  },
  attention: {
    color: "black.primary",
    borderColor: "yellow.primary",
    backgroundColor: "yellow.primary",
    _hover: { bg: "green.light", borderColor: "green.light" },
  },
};
export type ButtonProps = {
  children: ReactNode;
  fill: boolean;
  variant?: keyof typeof variants;
  type?: "button" | "submit" | "reset";
};
export const Button = ({
  variant = "primary",
  type = "button",
  fill = true,
  children,
}: ButtonProps) => {
  return (
    <ChakraButton
      border="solid"
      borderRadius="none"
      borderWidth={2}
      fontSize="xl"
      fontStyle="italic"
      width={fill ? "100%" : "auto"}
      {...variants[variant]}
      type={type}
    >
      {children}
    </ChakraButton>
  );
};
