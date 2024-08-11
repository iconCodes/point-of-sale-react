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
    background1: "#e9eaea",
    border1: "#dddddd",
    scrollbarBg1: "#fbfbfb",
    scrollbarThumb1: "#bbb",

    text2: "#eee",
    background2: "#222",
    border2: "#555555",
    scrollbarBg2: "#333333",
    scrollbarThumb2: "#444",

    primary: "#42b5da",
    secondary: "#2f3131"
  },
  menuItems,
  pills,
  template
};
