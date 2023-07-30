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
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant: keyof typeof variants;
};

export const Input = ({ variant, value, onChange }: InputProps) => {
  return (
    <ChakraInput
      borderRadius="unset"
      onChange={onChange}
      {...variants[variant]}
      border="none"
      value={value}
    />
  );
};
