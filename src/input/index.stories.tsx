import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Input from "./index";

export default {
  component: Input,
  title: "Input",
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
