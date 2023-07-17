import { Box, Flex } from "@chakra-ui/react";

import { Link } from "../link";
import { Text } from "../text";

export const Footer = () => {
  return (
    <Box as="footer" bg="black.primary">
      <Flex
        flexDirection="column"
        gap={12}
        maxWidth="container.lg"
        mx="auto"
        padding={4}
      >
        <Flex flexDirection="column">
          <Link href="/" variant="secondary">
            {"top=>"}
          </Link>
          <Link href="/" variant="secondary">
            {"about=>"}
          </Link>
          <Link href="/" variant="secondary">
            {"privacy=>"}
          </Link>
        </Flex>
        <Flex justifyContent="flex-end" width="full">
          <Text variant="secondary">Desigined and developed by cyamy</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
