import { useEffect, useState } from "react";

import { AspectRatio, Spinner, Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export type YoutubePlayerProps = {
  url: string;
};

export const YoutubePlayer = ({ url }: YoutubePlayerProps) => {
  // NOTE: https://github.com/cookpete/react-player/issues/1428
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <AspectRatio maxW="full" ratio={16 / 9}>
      {hasWindow ? (
        <ReactPlayer height="100%" url={url} width="100%" />
      ) : (
        <Box>
          <Spinner color="white.primary" size="xl" />
        </Box>
      )}
    </AspectRatio>
  );
};
