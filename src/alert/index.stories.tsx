import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Alert from "./index";

export default {
  component: Alert,
  title: "Alert",
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: "Alert",
};
