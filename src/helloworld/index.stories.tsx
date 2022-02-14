import type { ComponentStory, ComponentMeta } from "@storybook/react";
import HelloWorld from "./index";

export default {
  component: HelloWorld,
  title: "Hello World",
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

export const Default = Template.bind({});
Default.args = {};
