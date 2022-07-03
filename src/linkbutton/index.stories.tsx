import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import LinkButton from "./index";

export default {
  component: LinkButton,
  title: "LinkButton",
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => {
  return <LinkButton {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
