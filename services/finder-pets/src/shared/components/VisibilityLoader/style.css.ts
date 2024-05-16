import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  f.flex,
  f.justifyCenter,
  {
    padding: "1rem 0.75rem",
  },
]);
