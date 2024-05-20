import { style } from "@vanilla-extract/css";
import { f } from "../../styles/functions";

export const likeAndViewBarWrap = style([f.pRelative]);

export const text = style({
  margin: "0 8px",
  fontSize: "12px",
  color: "#918E8E",
});

export const iconStyle = style({
  width: "24px",
  height: "24px",
  cursor: "pointer",
});

export const dividerStyle = style({
  width: "2px",
  height: "16px",
  margin: "0 4px",
  backgroundColor: "#918E8E",
});

export const deleteAndModifyBox = style([
  f.pAbsolute,
  {
    right: "20px",
    top: "10px",
    width: "60px",
    height: "60px",
    padding: "8px 12px",
    backgroundColor: "white",
    border: "1px solid #DFDFDF",
    borderRadius: "4px",
    zIndex: "10",
  },
]);

export const deleteAndModifyText = style({
  color: "black",
  fontSize: "12px",
  cursor: "pointer",
  textDecoration: "none",
});
