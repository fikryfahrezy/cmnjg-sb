import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import InputFile from "./index";

export default {
  component: InputFile,
  title: "InputFile",
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => {
  return <InputFile {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
