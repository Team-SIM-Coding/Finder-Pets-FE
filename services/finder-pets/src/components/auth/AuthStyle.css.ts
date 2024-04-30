import { f } from "@/shared/styles/functions";
import { vars } from "@design-system/themes";
import { style } from "@vanilla-extract/css";

export const findAndResetButtonsWrap = style({
  height: "20px",
  color: "black",
  fontSize: "12px",
});

export const subHeader = style({
  fontSize: "20px",
  fontWeight: "bold",
});

export const labelTextStyle = style({
  fontSize: "14px",
});

export const foundIdText = style({
  marginLeft: "8px",
  fontSize: "14px",
  color: vars.colors.$scale.blue[500],
});
