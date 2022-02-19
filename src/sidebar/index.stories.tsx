import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Sidebar from "./index";
import HamburgerIcon from "./hamburger";

export default {
  component: Sidebar,
  title: "Design System/Side Bar",
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
  return <Sidebar {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  style: {
    minHeight: "100vh",
  },
  linkList: [
    {
      key: "a",
      Link: ({ className }) => {
        return (
          <a href="/" className={className}>
            <HamburgerIcon fill="#111" />
            hi
          </a>
        );
      },
    },
    {
      key: "b",
      Link: ({ className, activeClassName }) => {
        return (
          <a href="/" className={`${className} ${activeClassName}`}>
            hi
          </a>
        );
      },
    },
  ],
};
