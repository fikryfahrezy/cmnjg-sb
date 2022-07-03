import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Toast from "./index";

export default {
  component: Toast,
  title: "Toast",
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  return <Toast {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
