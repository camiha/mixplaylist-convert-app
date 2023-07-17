import { ReactNode } from "react";

import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
// TODO: add hover color
const variants = {
  primary: {
    color: "black.primary",
    borderColor: "yellow.primary",
    backgroundColor: "yellow.primary",
  },
};
export type LinkProps = {
  children: ReactNode;
  nextLink?: typeof NextLink;
};

export const LinkInner = ({ nextLink, children }: LinkProps) => {
  return (
    <ChakraLink
      as={nextLink}
      {...variants.primary}
      fontStyle="italic"
      fontWeight="bold"
      px={1}
    >
      {children}
    </ChakraLink>
  );
};
