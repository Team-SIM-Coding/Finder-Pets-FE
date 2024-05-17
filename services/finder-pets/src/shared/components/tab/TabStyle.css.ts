import { f } from "@/shared/styles/functions";
import { createVar, style } from "@vanilla-extract/css";

export const currentPathColor = createVar();

export const tabMenuWrap = style([
  f.pFixed,
  {
    top: "84px",
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "white",
    zIndex: "1",
  },
]);

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
