import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";
import { Marker } from "../marker";

const meta: Meta<typeof Title> = {
  title: "Components / Typegraphy / Title",
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
