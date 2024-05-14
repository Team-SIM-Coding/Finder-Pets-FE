import { f } from "@/shared/styles/functions";
import { createVar, style } from "@vanilla-extract/css";

export const alertWidth = createVar();
export const alertHeight = createVar();

export const alertWrap = style([
  f.pAbsolute,
  {
    top: "50%",
    left: "50%",
    width: alertWidth,
    height: alertHeight,
    maxWidth: "600px",
    minWidth: "250px",
    minHeight: "200px",
    padding: "10px 12px",
    backgroundColor: "white",
    borderRadius: "12px",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    zIndex: "30",
  },
]);

export const alertFlexWrap = style({
  height: "100%",
  textAlign: "center",
});

export const alertSubFlexWrap = style({
  minHeight: "60px",
});

export const alertSubSecondFlexWrap = style({
  width: "100%",
  height: "55px",
});

export const alertTitle = style({
  fontSize: "18px",
  fontWeight: "bold",
  margin: "16px 0px",
});

export const AlertMainTextWrap = style({
  margin: "10px 4px",
});

export const AlertMainText = style({
  padding: "4px 8px",
  lineHeight: "1.3",
});
