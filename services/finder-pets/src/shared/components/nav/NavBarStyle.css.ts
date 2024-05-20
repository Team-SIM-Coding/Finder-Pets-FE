import { style } from "@vanilla-extract/css";
import { vars } from "@design-system/themes";
import { f } from "../../styles/functions";

export const navTopSection = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "10px",
  backgroundColor: "white",
  boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
  zIndex: 1000,
});

export const navBottomSection = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "10px",
  backgroundColor: "white",
  boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
  zIndex: 1000,
});

export const navIconLink = style({
  textDecoration: "none",
});

export const navIconWrap = style({
  color: "black",
  transform: "scale(1)",
  transition: "color 0.3s ease, transform 0.3s ease",

  selectors: {
    "&:hover": {
      color: vars.colors.$scale.blue[500],
      transform: "scale(1.1)",
    },
  },
});

export const activeIconWrap = style({
  width: "55px",
  color: vars.colors.$scale.blue[500],
});

export const navIconText = style({
  width: "55px",
  fontSize: "14px",
  marginTop: "4px",
});

export const navTopInputWrap = style([f.pRelative]);

export const navInput = style({
  width: "240px",
  height: "36px",
  paddingLeft: "40px",
  border: "1px solid #BCC0C8",
  borderRadius: "10px",
  boxShadow: "2px 6px 6px rgba(0,0,0,0.1)",
});

export const navLogoImage = style({
  marginTop: "4px",
});

export const searchIcon = style([
  f.pAbsolute,
  {
    left: "10px",
    top: "10px",
  },
]);

export const myPetRegisterButton = style({
  padding: "4px 8px",
  backgroundColor: "transparent",
  borderRadius: "4px",
});
