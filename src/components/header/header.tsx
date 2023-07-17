import { Box, Flex, Spacer } from "@chakra-ui/react";

import { Button } from "../button";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <Box bg="green.primary">
      <Flex alignItems="center" maxWidth="container.lg" mx="auto" px={4} py={2}>
        <Logo level="h2" />
        <Spacer />
        <Button fill={false}>Menu=&gt;</Button>
      </Flex>
    </Box>
  );
};
