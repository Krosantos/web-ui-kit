import React from "react";
import type { Preview } from "@storybook/react";
import { nightTheme } from "../src/theme/night.css";
import { theme } from "../src/theme/_contract.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import "./global.css";

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
    (Story) => {
      const withFonts = assignInlineVars({
        [theme.font.display]: "'Borel', cursive",
        [theme.font.body]: "'Quicksand', sans-serif",
      });
      const inlined = JSON.parse(JSON.stringify(withFonts));

      return (
        <div className={nightTheme} style={inlined}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
