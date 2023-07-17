import {
  Box,
  Text as ChakraText,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";

export type OutputProps = {
  title: string;
  result: string;
  songs: string[];
};

export const Output = ({ title, result, songs }: OutputProps) => {
  return (
    <Box bg="black.primary" color="white.primary">
      <Flex>
        <Box mr="0.5em">
          <ChakraText>{">"}</ChakraText>
        </Box>
        <Flex flexDirection="column" gap={3}>
          <ChakraText>{title}</ChakraText>
          <List
            as="ul"
            display="flex"
            flexDirection="column"
            fontSize="xs"
            gap={0.5}
          >
            {songs.map((song, index) => (
              <ListItem key={index}>
                <ChakraText>{song}</ChakraText>
              </ListItem>
            ))}
          </List>
          <Flex flexDirection="column" gap={0.5}>
            <ChakraText
              color={songs.length > 0 ? "green.light" : "red.primary"}
            >
              {songs.length} {result}
            </ChakraText>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
