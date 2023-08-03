import { style } from "@vanilla-extract/css";
import { theme } from "../theme/_contract.css";

export const button = style({
  padding: 24,
  backgroundColor: theme.surface.secondary.default,
  borderRadius: theme.radii.slight,
});
