import type { Preview } from "@storybook/react";
import { theme as customTheme } from "../src/config/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme: customTheme,
    },
  },
};

export default preview;
