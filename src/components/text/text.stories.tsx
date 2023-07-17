import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Components / Typography / Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "sample text",
  },
};

export const Secondary: Story = {
  args: {
    children: "sample text",
  },
};
