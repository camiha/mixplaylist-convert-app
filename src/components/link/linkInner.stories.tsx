import { Meta, StoryObj } from "@storybook/react";

import { LinkInner } from "./linkInner";

const meta: Meta<typeof LinkInner> = {
  title: "Components / Navigation / Link",
  component: LinkInner,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{ backgroundColor: "rgba(221, 221, 221, 0.5)", padding: "16px" }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LinkInner>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Login=>",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Login=>",
  },
};
export const Box: Story = {
  args: {
    variant: "box",
    children: "Login=>",
  },
};
