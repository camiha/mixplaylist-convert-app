import { Meta, StoryObj } from "@storybook/react";

import { Marker } from "../marker";

import { Description } from "./description";

const meta: Meta<typeof Description> = {
  title: "Components / Typography / Description",
  component: Description,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Description>;

export const Primary: Story = {
  args: {
    children: "Your favorite",
  },
};

export const WithMarker: Story = {
  args: {
    children: <Marker variant="greenDark">Your favorite</Marker>,
  },
};

export const WithMarkerMultchLine: Story = {
  args: {
    children: (
      <>
        <Marker variant="greenDark">Your favorite</Marker>
        <Marker variant="greenDark">Youtube mixplaylist</Marker>
        <Marker variant="greenDark">playing on Spotify.</Marker>
      </>
    ),
  },
};
