import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import DynamicSelect from "./index";

export default {
  component: DynamicSelect,
  title: "DynamicSelect",
} as ComponentMeta<typeof DynamicSelect>;

const Template: ComponentStory<typeof DynamicSelect> = (args) => {
  return <DynamicSelect {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
