import { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link";

const meta: Meta<typeof Link> = {
  title: "Components / Navigation / Link",
  component: Link,
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

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Login=>",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Login=>",
    href: "#",
  },
};
export const Box: Story = {
  args: {
    variant: "box",
    children: "Login=>",
    href: "#",
  },
};
