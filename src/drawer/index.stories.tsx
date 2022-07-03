import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Drawer from "./index";

export default {
  component: Drawer,
  title: "Drawer",
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  return <Drawer {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
