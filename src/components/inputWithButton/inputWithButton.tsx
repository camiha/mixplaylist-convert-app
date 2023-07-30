import {
  Flex,
  Button as ChakraButton,
  Text as ChakraText,
  Box,
} from "@chakra-ui/react";

import { Input } from "../input";

// TODO: variant support
export type InputWithButtonProps = {
  value: string;
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const InputWithButton = ({
  onClick,
  onChange,
  value,
}: InputWithButtonProps) => {
  return (
    <Box bg="black.primary">
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
        <Input onChange={onChange} value={value} variant="secondary" />
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
