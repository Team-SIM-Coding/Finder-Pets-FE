import { vars } from "@design-system/themes";
import { style } from "@vanilla-extract/css";

export const defaultButton = style({
  width: "100%",
  height: "50px",
  marginTop: "20px",
  fontSize: "16px",
  color: "white",
  backgroundColor: vars.colors.$scale.blue[500],
  border: "none",
  borderRadius: "10px",
});

export const whiteButton = style({
  width: "100%",
  height: "50px",
  marginTop: "20px",
  fontSize: "16px",
  backgroundColor: "white",
  border: "1px solid #DCD6D6",
  borderRadius: "10px",
});

export const linkTextButton = style({
  color: "black",
  textDecoration: "none",
});
