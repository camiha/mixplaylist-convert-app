import { Meta, StoryObj } from "@storybook/react";

import { InputWithButton } from "./inputWithButton";

const meta: Meta<typeof InputWithButton> = {
  title: "Components / Form / InputWithButton",
  component: InputWithButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputWithButton>;

export const Primary: Story = {
  args: {},
};
