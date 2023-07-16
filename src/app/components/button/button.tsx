import { Button as ChakraButton } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
};
export const Button = ({ type = "button", children }: ButtonProps) => {
  return <ChakraButton type={type}>{children}</ChakraButton>;
};
