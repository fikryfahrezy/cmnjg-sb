import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Popup from "./index";

export default {
  component: Popup,
  title: "Popup",
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => {
  return <Popup {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: (
    <ul>
      <li>Popup Item 1</li>
      <li>Popup Item 2</li>
    </ul>
  ),
};
