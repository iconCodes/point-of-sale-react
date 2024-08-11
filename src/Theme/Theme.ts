// import type { Theme } from "theme-ui";
import { menuItems } from "./menuItems";
import { pills } from "./pills";
import { template } from "./template";

export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace"
  },
  colors: {
    text1: "#676868",
    text2: "#eee",
    background1: "#e9eaea",
    background2: "#222",
    primary: "#42b5da",
    secondary: "#2f3131",
    border1: "#dddddd",
    border2: "#555555"
  },
  menuItems,
  pills,
  template
};
