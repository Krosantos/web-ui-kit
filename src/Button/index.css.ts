import { style } from "@vanilla-extract/css";
import { theme } from "../theme/_contract.css";
import { recipe } from "@vanilla-extract/recipes";

const base = style({
  border: "none",
  color: theme.text.default,
  borderRadius: theme.radii.slight,
  boxShadow: theme.shadow.soft,
  ":hover": {
    boxShadow: theme.shadow.medium,
  },
  borderWidth: theme.borderWidth,
  borderStyle: "solid",
  cursor: "pointer",
  transition: "all 0.25s ease-in",
  fontFamily: theme.font.body,
  lineHeight: 1.3,
  padding: 0,
});

export const button = recipe({
  base,

  variants: {
    variant: {
      primary: {
        backgroundColor: theme.surface.primary.default,
        borderColor: theme.border.primary.default,
        ":disabled": {
          cursor: "not-allowed",
          backgroundColor: theme.surface.primary.disabled,
          borderColor: theme.border.primary.disabled,
        },

        ":hover": {
          backgroundColor: theme.surface.primary.hovered,
          borderColor: theme.border.primary.hovered,
        },

        ":active": {
          backgroundColor: theme.surface.primary.active,
          borderColor: theme.border.primary.active,
        },
      },
      secondary: {
        backgroundColor: theme.surface.secondary.default,
        borderColor: theme.border.secondary.default,
        ":disabled": {
          cursor: "not-allowed",
          backgroundColor: theme.surface.secondary.disabled,
          borderColor: theme.border.secondary.disabled,
        },

        ":hover": {
          backgroundColor: theme.surface.secondary.hovered,
          borderColor: theme.border.secondary.hovered,
        },

        ":active": {
          backgroundColor: theme.surface.secondary.active,
          borderColor: theme.border.secondary.active,
        },
      },
    },
    size: {
      compact: {
        paddingLeft: 4,
        paddingRight: 4,
        height: theme.inputHeight.compact,
        fontSize: theme.fontSize.small,
      },
      small: {
        paddingLeft: 8,
        paddingRight: 8,
        height: theme.inputHeight.small,
        fontSize: theme.fontSize.small,
      },
      medium: {
        paddingLeft: 12,
        paddingRight: 12,
        height: theme.inputHeight.medium,
        fontSize: theme.fontSize.medium,
      },
      large: {
        paddingLeft: 16,
        paddingRight: 16,
        height: theme.inputHeight.large,
        fontSize: theme.fontSize.large,
      },
    },
    round: {
      true: {
        borderRadius: theme.radii.round,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    round: false,
  },
});

export const inner = style({
  display: "flex",
  alignItems: "center",
  lineHeight: 1,
  verticalAlign: "center",
});
