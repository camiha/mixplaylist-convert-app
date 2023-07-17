import { ReactNode } from "react";

import { Heading as ChakraHeading } from "@chakra-ui/react";

import { Marker } from "../marker";

export type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};

export const Heading = ({ level, children }: HeadingProps) => {
  return (
    <ChakraHeading as={level} fontSize="2xl" fontWeight="normal">
      <Marker>{children}</Marker>
    </ChakraHeading>
  );
};
