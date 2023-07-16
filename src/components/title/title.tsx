import { ReactNode } from "react";
import { Heading as ChakraHeading } from "@chakra-ui/react";

export type TitleProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};
export const Title = ({ level, children }: TitleProps) => {
  return (
    <ChakraHeading
      position={"relative"}
      as={level}
      display="inline-flex"
      alignItems="flex-start"
      flexDirection="column"
      fontStyle="italic"
      gap={2}
      fontWeight="normal"
      color="black.primary"
    >
      {children}
    </ChakraHeading>
  );
};
