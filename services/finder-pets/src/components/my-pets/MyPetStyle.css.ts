import { createVar, style } from "@vanilla-extract/css";

export const highLightColor = createVar();

export const myPetBoxImageStyle = style({
  borderRadius: "10px",
});

export const highLightTagStyle = style({
  width: "50px",
  padding: "4px 6px",
  marginRight: "4px",
  border: `1px solid ${highLightColor}`,
  borderRadius: "6px",
  transition: "backgroundColor 0.3s ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: highLightColor,
    },
  },
});

export const myPetBoxLinkStyle = style({
  textDecoration: "none",
});

export const myPetProfileTitleWrap = style({
  width: "100%",
  height: "50px",
});

export const myPetProfileDeleteButton = style({
  width: "70px",
  height: "40px",
  fontSize: "16px",
  backgroundColor: "white",
  border: "1px solid #DCD6D6",
  borderRadius: "10px",
  selectors: {
    "&:hover": {
      backgroundColor: "#DCD6D6",
      color: "black",
    },
  },
});
