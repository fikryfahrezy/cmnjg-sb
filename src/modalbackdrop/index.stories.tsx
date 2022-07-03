import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ModalBackdrop from "./index";

export default {
  component: ModalBackdrop,
  title: "ModalBackdrop",
} as ComponentMeta<typeof ModalBackdrop>;

const Template: ComponentStory<typeof ModalBackdrop> = (args) => {
  return <ModalBackdrop {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
