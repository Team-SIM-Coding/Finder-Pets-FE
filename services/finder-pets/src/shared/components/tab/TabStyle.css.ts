import { createVar, style } from "@vanilla-extract/css";

export const currentPathColor = createVar();

export const tabMenuWrap = style({
  padding: "10px",
});

export const tabBox = style({
  width: "50%",
  padding: "8px",
  color: currentPathColor,
  borderBottom: `2px solid ${currentPathColor}`,
  textDecoration: "none",
  selectors: {
    "&:hover": {
      borderBottom: `2px solid ${currentPathColor}`,
      color: currentPathColor,
    },
  },
});
