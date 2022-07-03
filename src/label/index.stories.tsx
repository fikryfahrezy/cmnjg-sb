import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Label from "./index";

export default {
  component: Label,
  title: "Label",
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => {
  return <Label {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
