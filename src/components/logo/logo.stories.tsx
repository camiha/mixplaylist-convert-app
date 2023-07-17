import { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./logo";

const meta: Meta<typeof Logo> = {
  title: "Components / Typography / Logo",
  component: Logo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    level: "h1",
  },
};
