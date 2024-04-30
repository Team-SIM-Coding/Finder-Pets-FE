import { vars } from "@design-system/themes";
import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: "20px",
  padding: "20px",
});

export const headerTitle = style({
  marginTop: "12px",
  fontSize: "24px",
  textAlign: "center",
});

export const mainWrap = style({
  width: "100%",
  marginTop: "20px",
});

export const footerWrap = style({
  width: "100%",
  marginTop: "20px",
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
