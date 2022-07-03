import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import CheckBox from "./index";

export default {
  component: CheckBox,
  title: "CheckBox",
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
