import { vars } from "@design-system/themes";
import { style } from "@vanilla-extract/css";

export const container = style({
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
