import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ImagePicker from "./index";

export default {
  component: ImagePicker,
  title: "ImagePicker",
} as ComponentMeta<typeof ImagePicker>;

const Template: ComponentStory<typeof ImagePicker> = (args) => {
  return <ImagePicker {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
