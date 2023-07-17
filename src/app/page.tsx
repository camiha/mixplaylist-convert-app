"use client";
import { Box, Flex } from "@chakra-ui/react";

import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Link } from "@/components/link";
import { Marker } from "@/components/marker";
import { PageInner } from "@/components/pageInner";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <main>
      <Box bg="green.primary" minHeight="100vh">
        <Box height="100vh" maxWidth="container.lg" mx="auto">
          <PageInner>
            <Flex
              flexDirection="column"
              gap={4}
              height="full"
              justifyContent="center"
            >
              <Title level="h1">
                <Marker>Mixplaylist</Marker>
                <Marker>Convert.</Marker>
              </Title>
              <Description>
                <Marker variant="greenDark">Your favorite</Marker>
                <Marker variant="greenDark">Youtube mixplaylist</Marker>
                <Marker variant="greenDark">playing on Spotify.</Marker>
              </Description>
              <Box>
                <Link href="/convert" variant="box">
                  {`Login=>`}
                </Link>
              </Box>
            </Flex>
          </PageInner>
        </Box>
        <Footer />
      </Box>
    </main>
  );
}
