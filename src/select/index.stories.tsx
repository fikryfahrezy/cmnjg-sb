import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Select from "./index";

export default {
  component: Select,
  title: "Select",
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
