import { style } from "@vanilla-extract/css";
import { theme } from "../theme";
import { recipe } from "@vanilla-extract/recipes";

const base = style({
  fontFamily: theme.font.body,
  fontWeight: "normal",
  lineHeight: 1.5,
});

export const typography = recipe({
  base,

  variants: {
    size: {
      xxxlarge: {
        fontSize: theme.fontSize.xxxlarge,
      },
      xxlarge: {
        fontSize: theme.fontSize.xxlarge,
      },
      xlarge: {
        fontSize: theme.fontSize.xlarge,
      },
      large: {
        fontSize: theme.fontSize.large,
      },
      medium: {
        fontSize: theme.fontSize.medium,
      },
      small: {
        fontSize: theme.fontSize.small,
      },
      xsmall: {
        fontSize: theme.fontSize.xsmall,
      },
      xxsmall: {
        fontSize: theme.fontSize.xxsmall,
      },
    },
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
    strikethrough: {
      true: {
        textDecoration: "line-through",
      },
    },
    display: {
      true: {
        fontFamily: theme.font.display,
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
