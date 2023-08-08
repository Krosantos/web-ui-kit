import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
    size: "medium",
    variant: "primary",
    round: false,
  },
};
