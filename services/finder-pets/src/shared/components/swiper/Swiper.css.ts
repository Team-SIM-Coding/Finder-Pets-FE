import { globalStyle, style } from "@vanilla-extract/css";

globalStyle(".swiper", {
  padding: "0 24px",
});

globalStyle(".swiper-button-prev", {
  display: "none",
});

globalStyle(".swiper-button-next", {
  display: "none",
});

export const imageWrap = style({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
});

export const imageStyle = style({
  borderRadius: "10px",
});
