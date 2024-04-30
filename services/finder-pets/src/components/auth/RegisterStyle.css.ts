import { vars } from "@design-system/themes";
import { style } from "@vanilla-extract/css";

export const registerButton = style({
  width: "100%",
  height: "50px",
  marginTop: "20px",
  fontSize: "16px",
  color: "white",
  backgroundColor: vars.colors.$scale.blue[500],
  border: "none",
  borderRadius: "10px",
});
