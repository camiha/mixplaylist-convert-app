import { Input as ChakraInput } from "@chakra-ui/react";

const variants = {
  primary: {
    color: "black.primary",
    backgroundColor: "white.primary",
  },
  secondary: {
    color: "white.primary",
    backgroundColor: "black.primary",
  },
};

export type InputProps = {
  variant: keyof typeof variants;
};

export const Input = ({ variant }: InputProps) => {
  return (
    <ChakraInput borderRadius="unset" {...variants[variant]} border="none" />
  );
};
