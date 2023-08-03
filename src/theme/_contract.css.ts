import { createThemeContract } from "@vanilla-extract/css";

const surface = {
  default: "",
  disabled: "",
  active: "",
  hovered: "",
};

export const theme = createThemeContract({
  surface: {
    primary: surface,
    secondary: surface,
  },
  border: {
    primary: surface,
    secondary: surface,
  },
  text: {
    default: null,
    subdued: null,
    highlight: null,
    onInteractive: null,
  },
  shadow: {
    flat: null,
    soft: null,
    medium: null,
    strong: null,
  },
  background: null,
  borderWidth: null,
  radii: {
    sharp: null,
    slight: null,
    soft: null,
    verySoft: null,
    round: null,
  },
  font: {
    display: null,
    body: null,
  },
});
