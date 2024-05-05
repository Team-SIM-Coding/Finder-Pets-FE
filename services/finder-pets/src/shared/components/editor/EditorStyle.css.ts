import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100dvh",
  padding: "20px",
  marginTop: "50px",
});

export const headerTitle = style({
  width: "100%",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "left",
});

export const mainWrap = style({
  width: "100%",
});

export const footerWrap = style({
  width: "100%",
  marginTop: "auto",
});

export const imageRegisterFormWrap = style([
  f.pRelative,
  {
    padding: "10px",
  },
]);

export const imageRegisterFormImage = style({
  cursor: "pointer",
});

export const imageRegisterFormFileInputWrap = style([
  f.pAbsolute,
  {
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
]);

export const imageRegisterFormFileInput = style({
  width: "150px",
  height: "150px",
  opacity: 0,
});
