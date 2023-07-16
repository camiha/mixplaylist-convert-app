import { Meta, StoryObj } from "@storybook/react";

import { Marker } from "./marker";

const meta: Meta<typeof Marker> = {
  title: "Components / Typography / Marker",
  component: Marker,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Marker>;

export const Black: Story = {
  args: {
    variant: "black",
    children: "Mixplaylist",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
    children: "Mixplaylist",
  },
};
