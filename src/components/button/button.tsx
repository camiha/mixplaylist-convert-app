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
    _hover: { opacity: 0.5 },
  },
  attention: {
    color: "black.primary",
    borderColor: "yellow.primary",
    backgroundColor: "yellow.primary",
    _hover: { opacity: 0.5 },
  },
};
export type ButtonProps = {
  children: ReactNode;
  fill?: boolean;
  variant?: keyof typeof variants;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};
export const Button = ({
  variant = "primary",
  type = "button",
  fill = true,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ChakraButton
      border="solid"
      borderRadius="none"
      borderWidth={2}
      fontSize="2xl"
      fontStyle="italic"
      width={fill ? "100%" : "auto"}
      {...variants[variant]}
      onClick={onClick}
      type={type}
    >
      {children}
    </ChakraButton>
  );
};
