import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Aside from "./index";

export default {
  component: Aside,
  title: "Aside",
} as ComponentMeta<typeof Aside>;

const Template: ComponentStory<typeof Aside> = (args) => {
  return <Aside {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
