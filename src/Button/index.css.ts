import { style } from "@vanilla-extract/css";
import { theme } from "../theme/_contract.css";

export const button = style({
  border: 'none',
  padding: 24,
  color: theme.text.default,
  backgroundColor: theme.surface.secondary.default,
  borderRadius: theme.radii.soft,
  boxShadow: theme.shadow.soft,
  borderWidth: theme.borderWidth,
  borderStyle: 'solid',
  borderColor: theme.border.secondary.default,
  cursor: 'pointer',
  transition: "all 0.25s ease-in",

  ":disabled": {
    cursor: 'not-allowed',
    backgroundColor: theme.surface.secondary.disabled
  },

  ":hover": {
    backgroundColor: theme.surface.secondary.hovered
  },

  ":active": {
    backgroundColor: theme.surface.secondary.active
  }
});
