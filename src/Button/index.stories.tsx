import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Button variant='primary'>Egg</Button>
}