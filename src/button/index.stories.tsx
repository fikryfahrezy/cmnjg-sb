import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Button from "./index";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: "Button",
};
