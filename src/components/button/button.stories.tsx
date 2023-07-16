import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components / Form / Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#ddd", padding: "16px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button Label=>",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button Label=>",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Button Label=>",
  },
};

export const Attention: Story = {
  args: {
    variant: "attention",
    children: "Button Label=>",
  },
};

export const PrimaryNofill: Story = {
  args: {
    fill: false,
    children: "Button Label=>",
  },
};

export const SecondaryNofill: Story = {
  args: {
    fill: false,
    variant: "secondary",
    children: "Button Label=>",
  },
};

export const WarningNofill: Story = {
  args: {
    fill: false,
    variant: "warning",
    children: "Button Label=>",
  },
};

export const AttentionNofill: Story = {
  args: {
    fill: false,
    variant: "attention",
    children: "Button Label=>",
  },
};
