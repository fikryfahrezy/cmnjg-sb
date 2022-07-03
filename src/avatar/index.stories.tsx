import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Avatar from "./index";

export default {
  component: Avatar,
  title: "Avatar",
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
