import { Meta, StoryObj } from "@storybook/react";

import { Marker } from "../marker";

import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components / Typography / Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    level: "h1",
    children: "Mixplaylist",
  },
};

export const WithMarker: Story = {
  args: {
    level: "h1",
    children: (
      <>
        <Marker>Mixplaylist</Marker>
        <Marker>Convert.</Marker>
      </>
    ),
  },
};
