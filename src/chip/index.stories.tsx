import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Chip from "./index";

export default {
  component: Chip,
  title: "Chip",
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: "Chip",
};
