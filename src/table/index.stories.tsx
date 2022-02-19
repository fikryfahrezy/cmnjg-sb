import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { ExampleTableProps } from "./index";
import React from "react";
import ExampleTable from "./index";

export default {
  component: ExampleTable,
  titla: "Example Table",
} as ComponentMeta<typeof ExampleTable>;

const data = [
  {
    col1: "Hello",
    col2: "World",
    col3: "World",
    col4: "Hello",
    col5: "World",
    col6: "World",
    col7: "Hello",
    col8: "World",
    col9: "World",
  },
];

const columns: ExampleTableProps["columns"] = [
  {
    Header: "Column 1",
    accessor: "col1",
    isSticky: true,
  },
  {
    Header: "Test",
    accessor: "col2",
  },
  {
    Header: "Test",
    accessor: "col3",
  },
  {
    Header: "Column xfsdfs1",
    accessor: "col4",
  },
  {
    Header: "Tesfsfsdt",
    accessor: "col5",
    Cell: () => {
      return <p>hi</p>;
    },
  },
  {
    Header: "Test fdsfsd",
    accessor: "col6",
  },
  {
    Header: "Column sfsfsd",
    accessor: "col7",
  },
  {
    Header: "Test fdfsf",
    accessor: "col8",
  },
  {
    Header: "Test fsdfds",
    accessor: "col9",
    isSticky: true,
  },
];

const Template: ComponentStory<typeof ExampleTable> = (args) => {
  return <ExampleTable {...args} columns={columns} data={data} />;
};

export const Example = Template.bind({});
Example.args = {
  columns,
  data,
  style: {
    width: "100%",
  },
};
