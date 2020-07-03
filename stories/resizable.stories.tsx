import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { SimpleTable, ValueType } from "../src";

const stories = storiesOf("Resizable", module);

stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add("FixedRight", () => (
  <SimpleTable
    id="right"
    columns={[
      {
        title: "日期",
        key: "day",
        dataIndex: "day",
        width: 120,
        valueType: ValueType.DATE_TIME,
      },
      {
        title: "email",
        key: "email",
        dataIndex: "email",
        width: 120,
        valueType: {
          type: ValueType.TAG,
        },
      },
      {
        title: "test",
        key: "test",
        dataIndex: "test.names[0].age",
        width: 120,
      },
      {
        fixed: "right",
        title: "test1",
        key: "test1",
        dataIndex: "test1",
        width: 120,
      },
    ]}
    dataSource={[
      {
        day: 1215,
        email: ["da", "das"],
        test: { names: [{ age: 2 }] },
        test1: "dsaad",
      },
      {
        day: 1215,
        email: "das",
        test: { names: [{ age: 3 }] },
        test1: "dsaad",
      },
    ]}
  />
));

stories.add("FixedLeft", () => (
  <SimpleTable
    id="left"
    columns={[
      {
        title: "index",
        key: "index",
        fixed: "left",
        valueType: ValueType.INDEX,
      },
      {
        title: "日期",
        key: "day",
        dataIndex: "day",
        width: 120,
        ellipsis: true,
        copyable: true,
        valueType: ValueType.DATE_TIME,
      },
      {
        title: "电子邮件",
        key: "email",
        ellipsis: true,
        dataIndex: "email",
        width: 120,
        valueType: {
          type: ValueType.TAG,
          onClick: (values, value, record, index) => {
            console.log(values, value, record, index);
          },
        },
      },
      {
        title: "test",
        key: "test",
        dataIndex: "test",
        width: 120,
      },
      {
        title: "test1dasd",
        key: "test1",
        dataIndex: "test1",
        width: 120,
        fixed: "right",
        render: () => {
          return <span>啦啦啦</span>;
        },
      },
    ]}
    dataSource={[
      {
        day: 1215,
        email: ["da", "das", "dassda", "dassa"],
        test: "dasas",
        test1: "dsaad",
      },
      {
        day: 1215,
        email: "das",
        test: "dasas",
        test1: "dsaaddsajds",
      },
    ]}
  />
));
