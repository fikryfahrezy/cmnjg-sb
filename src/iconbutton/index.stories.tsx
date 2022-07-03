import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import IconButton from "./index";

export default {
  component: IconButton,
  title: "IconButton",
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: "i",
};
