import type { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import LoginPage from "./index";

export default {
  component: LoginPage,
  title: "Design System/Login",
} as ComponentMeta<typeof LoginPage>;

const LoginPageTemplate: ComponentStory<typeof LoginPage> = (args) => {
  return <LoginPage {...args} />;
};

export const Example = LoginPageTemplate.bind({});
Example.args = {};
