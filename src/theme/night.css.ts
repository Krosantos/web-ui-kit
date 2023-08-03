import { createTheme } from "@vanilla-extract/css";
import { theme } from "./_contract.css";

export const nightTheme = createTheme(theme, {
  surface: {
    primary: {
      default: "#f3f6f5",
      disabled: "#dcd0d8",
      active: "#e8edec",
      hovered: "#dce5e2",
    },
    secondary: {
      default: "#fca311",
      disabled: "#dcd0d8",
      active: "#fdb849",
      hovered: "#fdc05d",
    },
  },
  text: {
    default: "#313630",
    subdued: "#808c7d",
    highlight: "#77966d",
    onInteractive: "#dfe2df",
  },
  border: {
    primary: {
      default: "",
      disabled: "",
      active: "",
      hovered: "",
    },
    secondary: {
      default: "",
      disabled: "",
      active: "",
      hovered: "",
    },
  },
  shadow: {
    flat: "0px 1px 0px rgba(0, 0, 0, 0.05)",
    soft: "0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",
    medium: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.15)",
    strong:
      "0px 6px 12px rgba(0, 0, 0, 0.25), 0px 20px 25px rgba(0, 0, 0, 0.15)",
  },
  background: "#0cb5fe",
  borderWidth: "1px",
  radii: {
    sharp: "0px",
    slight: "2px",
    soft: "4px",
    verySoft: "8px",
    round: "99999px",
  },
  font: {
    display: "",
    body: "",
  },
});
