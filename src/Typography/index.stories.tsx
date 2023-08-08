import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './';

const meta = {
    title: 'Example/Text',
    component: Text,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        children: 'Sample Text',
        size: 'medium',
        bold: false,
        inline: false,
        italic: false,
        strikethrough: false,
        display: false,
    }
}
