import {
  Flex,
  Button as ChakraButton,
  Text as ChakraText,
  Box,
} from "@chakra-ui/react";

import { Input } from "../input";

// TODO: variant support
export type InputWithButtonProps = {
  name: string;
  onClick: () => void;
};
export const InputWithButton = ({ onClick }: InputWithButtonProps) => {
  return (
    <Box bg="black.primary" padding={2}>
      <Flex
        alignItems="center"
        borderBottom="solid"
        borderBottomWidth={0.5}
        borderColor="white.primary"
        gap={1}
      >
        <ChakraText color="white.primary" fontSize="lg">
          {">"}
        </ChakraText>
        {/* TODO: RHF Setup */}
        <Input variant="secondary" />
        <ChakraButton
          _hover={{ opacity: 0.8 }}
          bg="black.primary"
          borderRadius="unset"
          color="white.primary"
          fontWeight="normal"
          onClick={onClick}
        >
          send
        </ChakraButton>
      </Flex>
    </Box>
  );
};
