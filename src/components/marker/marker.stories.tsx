import { Meta, StoryObj } from "@storybook/react";

import { Marker } from "./marker";

const meta: Meta<typeof Marker> = {
  title: "Components / Typegraphy / Marker",
  component: Marker,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Marker>;

export const Primary: Story = {
  args: {
    children: "Mixplaylist",
  },
};
