import { f } from "@/shared/styles/functions";
import { vars } from "@design-system/themes";
import { style } from "@vanilla-extract/css";

export const writerButtonWrap = style([
  f.pFixed,
  {
    right: "10px",
    bottom: "80px",
    padding: "8px",
    backgroundColor: vars.colors.$scale.blue[500],
    borderRadius: "100%",
  },
]);

export const buttonStyle = style({
  width: "52px",
  height: "52px",
  color: "white",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
});

export const iconStyle = style({
  width: "28px",
  height: "28px",
});

export const buttonText = style({
  marginTop: "4px",
  fontSize: "14px",
});
