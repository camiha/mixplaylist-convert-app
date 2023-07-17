import { Heading as ChakraHeading } from "@chakra-ui/react";
import NextLink from "next/link";

import { Marker } from "../marker";
export type LogoProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Logo = ({ level }: LogoProps) => {
  return (
    <NextLink href="/">
      <ChakraHeading
        alignItems="flex-start"
        as={level}
        color="black.primary"
        display="inline-flex"
        flexDirection="column"
        fontFamily="fonts.heading"
        fontSize="sm"
        fontStyle="italic"
        fontWeight="normal"
        gap={0.5}
        lineHeight="base"
        position="relative"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          opacity: 0.8,
        }}
      >
        <Marker px={1}>Mixplaylist</Marker>
        <Marker px={1}>Convert.</Marker>
      </ChakraHeading>
    </NextLink>
  );
};
