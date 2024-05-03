import { vars } from "@design-system/themes";
import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100dvh",
  padding: "20px",
});

export const headerTitle = style({
  fontSize: "24px",
  textAlign: "center",
});

export const mainWrap = style({
  width: "100%",
});

export const footerWrap = style({
  width: "100%",
  marginTop: "auto",
});

export const inputStyle = style({
  width: "100%",
  height: "40px",
  margin: "8px 0px",
  padding: "4px 8px",
  border: "1px solid #DCD6D6",
});

export const ValidationMessageStyle = style({
  margin: "6px 0px 8px 4px",
  fontSize: "10px",
  color: vars.colors.$scale.red[900],
});

export const myMenuLinkWrap = style({
  color: "black",
  textDecoration: "none",
});

export const myMenuLinkBox = style({
  padding: "8px 0",
  margin: "0 20px",
  borderBottom: "1px solid #E9E9E9",
});

export const myMenuLinkText = style({
  fontSize: "20px",
  fontWeight: "bold",
});

export const myMenuArrowIcon = style({
  width: "30px",
  height: "30px",
});
