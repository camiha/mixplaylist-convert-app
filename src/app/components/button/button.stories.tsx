import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Components / Forms / Button",
} as Meta;

export const Basic: StoryFn = (props) => <Button>Button</Button>;
