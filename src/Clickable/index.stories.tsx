import type { Meta, StoryObj } from "@storybook/react";

import { Clickable } from "./";

const meta = {
  title: "Clickable",
  component: Clickable,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Clickable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};
