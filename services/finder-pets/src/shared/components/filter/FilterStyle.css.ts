import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const filterMenuWrap = style([
  f.pFixed,
  {
    top: "56px",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "white",
    zIndex: "1",
  },
]);

export const selectStyle = style({
  padding: "4px",
  marginRight: "8px",
  border: "1px solid #DFDFDF",
  borderRadius: "6px",
});

export const filterIconStyle = style({
  width: "20px",
  height: "20px",
  cursor: "pointer",
});
