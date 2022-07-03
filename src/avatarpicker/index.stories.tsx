import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import AvatarPicker from "./index";

export default {
  component: AvatarPicker,
  title: "AvatarPicker",
} as ComponentMeta<typeof AvatarPicker>;

const Template: ComponentStory<typeof AvatarPicker> = (args) => {
  return <AvatarPicker {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
