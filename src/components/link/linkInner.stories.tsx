import { Meta, StoryObj } from "@storybook/react";

import { LinkInner } from "./linkInner";

const meta: Meta<typeof LinkInner> = {
  title: "Components / Navigation / Link",
  component: LinkInner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkInner>;

export const Primary: Story = {
  args: {
    children: "Login=>",
  },
};
