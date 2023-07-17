import { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Components / Typography / Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    level: "h2",
    children: "1.Input Playlist URL",
  },
};
