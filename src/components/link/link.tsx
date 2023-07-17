import { ReactNode } from "react";

import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

// TODO: add hover color
const variants = {
  primary: {
    color: "black.primary",
    fontSize: "md",
    _hover: { bg: "green.light" },
  },
  secondary: {
    color: "white.primary",
    fontSize: "md",
    _hover: { bg: "green.light" },
  },
  box: {
    color: "black.primary",
    borderColor: "yellow.primary",
    backgroundColor: "yellow.primary",
    fontStyle: "italic",
    fontWeight: "bold",
    px: 1,
    fontSize: "2xl",
    _hover: { bg: "green.light" },
  },
};
export type LinkProps = {
  children: ReactNode;
  href: string;
  nextLink?: typeof NextLink;
  variant?: keyof typeof variants;
};

export const Link = ({ children, variant = "primary", href }: LinkProps) => {
  return (
    <ChakraLink
      as={NextLink}
      {...variants[variant]}
      fontStyle="italic"
      href={href}
    >
      {children}
    </ChakraLink>
  );
};
