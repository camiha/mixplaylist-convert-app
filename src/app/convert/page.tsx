"use client";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";

import { Button } from "@/components/button";
import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Heading } from "@/components/heading";
import { InputWithButton } from "@/components/inputWithButton";
import { Marker } from "@/components/marker";
import { Output } from "@/components/output";
import { PageInner } from "@/components/pageInner";
import { YoutubePlayer } from "@/components/youtubePlayer";

export default function Home() {
  const youtubeSongs = [
    "💿 How to Count One to Ten - At the Same Time",
    "💿 8m - slow dance",
    "💿 toe - Boyo",
    "💿 Hyakkei - Kagerou Railway",
    "💿 8m - shizuku",
    "💿 LITE - Echolocation",
    "💿 Via Luna - If You Can't Vibe With the..",
    "💿 Monobody - Raytracing",
    "💿 3nd - Waltz For Lilly",
    "💿 Ghost Park - A Chorus of Rust",
  ];

  const spotifySongs = [
    "✅ How to Count One to Ten - At the Same Time ",
    "✅ 8m - slow dance ",
    "✅ toe - Boyo ",
    "✅ Hyakkei - Kagerou Railway ",
    "❎ 8m - shizuku ",
    "✅ LITE - Echolocation ",
    "✅ Via Luna - If You Can't Vibe With the...",
    "❎ Monobody - Raytracing ",
    "✅ 3nd - Waltz For Lilly ",
    "✅ Ghost Park - A Chorus of Rust ",
  ];

  return (
    <main>
      <Box
        bg="black.primary"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        minHeight="100vh"
      >
        <Header />
        <PageInner>
          <Grid gap={16}>
            <GridItem display="flex" flexDirection="column" gap={3}>
              <Description>
                <Marker variant="greenLight">Let’s convert</Marker>
                <Marker variant="greenLight">mixplaylist to</Marker>
                <Marker variant="greenLight">Spotify playlist.</Marker>
              </Description>
            </GridItem>
            <GridItem display="flex" flexDirection="column" gap={3}>
              <Heading level="h2">1.Input playlist URL</Heading>
              <Flex flexDirection="column" gap={3}>
                <InputWithButton
                  name=""
                  onClick={() => {
                    console.log("click");
                  }}
                />
                <YoutubePlayer url="https://www.youtube.com/watch?v=BKjX5UWsH_U" />
              </Flex>
            </GridItem>
            <GridItem display="flex" flexDirection="column" gap={3}>
              <Heading level="h2">2.Set playlist name</Heading>
              <InputWithButton
                name=""
                onClick={() => {
                  console.log("click");
                }}
              />
            </GridItem>
            <GridItem display="flex" flexDirection="column" gap={3}>
              <Heading level="h2">3.Get music list</Heading>
              <Flex flexDirection="column" gap={6}>
                <Output
                  result="songs detected."
                  songs={youtubeSongs}
                  title="get list from youtube..."
                />
                <Output
                  result="songs found."
                  songs={spotifySongs}
                  title="searching spotify..."
                />
                <Flex flexDirection="column" gap={3}>
                  <Button variant="warning">{"Reset=>"}</Button>
                  <Button variant="attention">{"Generate=>"}</Button>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </PageInner>
        <Box mt="auto">
          <Footer />
        </Box>
      </Box>
    </main>
  );
}
