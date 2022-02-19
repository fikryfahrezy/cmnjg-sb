import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { TableProps } from "./index";
import React from "react";
import Table from "./index";

export default {
  component: Table,
  title: "Design System/Table",
} as ComponentMeta<typeof Table>;

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
    col10: "World",
    col11: "World",
    col12: "World",
    col13: "World",
  },
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
    col10: "World",
    col11: "World",
    col12: "World",
    col13: "World",
  },
];

const columns: TableProps["columns"] = [
  {
    Header: "Column 1",
    accessor: "col1",
    isSticky: true,
  },
  {
    Header: "Test",
    accessor: "col2",
    minWidth: 250,
  },
  {
    Header: "Test",
    accessor: "col3",
    minWidth: 250,
  },
  {
    Header: "Column xfsdfs1",
    accessor: "col4",
    isSticky: true,
    minWidth: 250,
  },
  {
    Header: "Tesfsfsdt",
    accessor: "col5",
    Cell: () => {
      return <p>hi</p>;
    },
    minWidth: 250,
  },
  {
    Header: "Test fdsfsd",
    accessor: "col6",
    minWidth: 250,
  },
  {
    Header: "Column sfsfsd",
    accessor: "col7",
    minWidth: 250,
  },
  {
    Header: "Test fdfsf",
    accessor: "col8",
    minWidth: 250,
  },
  {
    Header: "Test fdfsf",
    accessor: "col9",
    minWidth: 250,
  },
  {
    Header: "Test fdfsf",
    accessor: "col10",
    minWidth: 250,
    isSticky: true,
  },
  {
    Header: "Test fdfsf",
    accessor: "col11",
    minWidth: 250,
  },
  {
    Header: "Test fdfsf",
    accessor: "col12",
    minWidth: 250,
  },
  {
    id: "hi",
    Header: "Test fsdfds",
    accessor: "col12",
    Cell: (props) => {
      return <button>Btn</button>;
    },
    isSticky: true,
    minWidth: 250,
  },
];

const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} columns={columns} data={data} />;
};

export const Example = Template.bind({});
Example.args = {
  columns,
  data,
  style: {
    width: "100%",
  },
};
