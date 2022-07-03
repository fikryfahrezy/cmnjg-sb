import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Card from "./index";

export default {
  component: Card,
  title: "Card",
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
