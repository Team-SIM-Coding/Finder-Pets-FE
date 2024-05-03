import { vars } from "@design-system/themes";
import { createVar, style } from "@vanilla-extract/css";
import { f } from "./functions";

export const spacingHeightVar = createVar();

export const sectionStyle = style([
  f.pRelative,
  {
    margin: "70px 0px",
  },
]);

export const layoutSectionStyle = style([
  f.pRelative,
  {
    margin: "150px 0px",
  },
]);

export const subHeader = style({
  fontSize: "20px",
  fontWeight: "bold",
});

export const thirdHeader = style({
  fontSize: "18px",
  fontWeight: "600",
});

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

export const spacingStyle = style({
  width: "100%",
  height: spacingHeightVar,
});
