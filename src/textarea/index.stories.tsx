import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import TextArea from "./index";

export default {
  component: TextArea,
  title: "TextArea",
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
