import { Meta, StoryObj } from "@storybook/react";

import { Output } from "./output";

const meta: Meta<typeof Output> = {
  title: "Components / Module / Output",
  component: Output,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Output>;

export const Success: Story = {
  args: {
    title: "get list from youtube...",
    result: "songs detected.",
    songs: [
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
    ],
  },
};

export const Error: Story = {
  args: {
    title: "get list from youtube...",
    result: "songs detected.",
    songs: [],
  },
};
