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
