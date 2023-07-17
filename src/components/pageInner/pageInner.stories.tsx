import { Meta, StoryObj } from "@storybook/react";

import { PageInner } from "./pageInner";

const meta: Meta<typeof PageInner> = {
  title: "Components / Layout / PageInner",
  component: PageInner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageInner>;

export const Primary: Story = {
  args: {
    children: "sample text",
  },
};
