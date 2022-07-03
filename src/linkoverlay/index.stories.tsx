import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { LinkBox, LinkOverlay } from "./index";

export default {
  component: LinkBox,
  title: "LinkOverlay",
} as ComponentMeta<typeof LinkBox>;

const Template: ComponentStory<typeof LinkBox> = (args) => {
  return <LinkBox {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  children: (
    <button>
      Link
      <LinkOverlay />
    </button>
  ),
};
