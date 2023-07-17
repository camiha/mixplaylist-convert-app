import { Heading as ChakraHeading } from "@chakra-ui/react";

import { Marker } from "../marker";
export type LogoProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Logo = ({ level }: LogoProps) => {
  return (
    <ChakraHeading
      alignItems="flex-start"
      as={level}
      color="black.primary"
      display="inline-flex"
      flexDirection="column"
      fontSize="sm"
      fontStyle="italic"
      fontWeight="normal"
      gap={0.5}
      position="relative"
    >
      <Marker px={1}>Mixplaylist</Marker>
      <Marker px={1}>Convert.</Marker>
    </ChakraHeading>
  );
};
