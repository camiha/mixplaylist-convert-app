import { Meta, StoryObj } from "@storybook/react";

import { YoutubePlayer } from "./youtubePlayer";

const meta: Meta<typeof YoutubePlayer> = {
  title: "Components / Youtube / YoutubePlayer",
  component: YoutubePlayer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof YoutubePlayer>;

export const Primary: Story = {
  args: {
    // children: "sample text",
    url: "https://www.youtube.com/watch?v=BKjX5UWsH_U",
  },
};
