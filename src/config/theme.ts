import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: {
    primary: "#191414",
  },
  white: {
    primary: "#FFFFFF",
  },
  green: {
    primary: "#1DB954",
    light: "#8EDCAA",
    dark: "#1B6734",
  },
  yellow: {
    primary: "#FAE22D",
  },
  red: {
    primary: "#E02B43",
  },
};

const styles = {};

const fonts = {
  heading: '"Space Mono", sans-serif',
  body: '"Space Mono", sans-serif',
};

export const theme = extendTheme({ colors, styles, fonts });
