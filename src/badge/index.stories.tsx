import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Badge from "./index";

export default {
  component: Badge,
  title: "Badge",
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: "Badge",
};
