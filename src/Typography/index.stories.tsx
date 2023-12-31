import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./";

const meta = {
  title: "Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Sample Text",
    size: "medium",
    bold: false,
    as: "p",
    italic: false,
    underline: false,
    strikethrough: false,
    display: false,
  },
};
