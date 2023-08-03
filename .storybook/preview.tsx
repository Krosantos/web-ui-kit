import React from "react";
import type { Preview } from "@storybook/react";
import { nightTheme } from '../src/theme/night.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => <div className={nightTheme}><Story /></div>
  ]
};


export default preview;
