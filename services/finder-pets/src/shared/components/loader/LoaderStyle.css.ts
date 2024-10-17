import { vars } from "@design-system/themes";
import { keyframes, style } from "@vanilla-extract/css";

export const loaderBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.1)",
  zIndex: "2000",
});

const animloader = keyframes({
  "0%": {
    boxShadow:
      "0 24px rgba(136, 148, 255, 0), 24px 24px rgba(136, 148, 255, 0), 24px 48px rgba(136, 148, 255, 0), 0px 48px rgba(136, 148, 255, 0)",
  },
  "12%": {
    boxShadow:
      "0 24px #54C3F6, 24px 24px rgba(136, 148, 255, 0), 24px 48px rgba(136, 148, 255, 0), 0px 48px rgba(136, 148, 255, 0)",
  },
  "25%": {
    boxShadow:
      "0 24px #54C3F6, 24px 24px #54C3F6, 24px 48px rgba(136, 148, 255, 0), 0px 48px rgba(136, 148, 255, 0)",
  },
  "37%": {
    boxShadow:
      "0 24px #54C3F6, 24px 24px #54C3F6, 24px 48px #54C3F6, 0px 48px rgba(136, 148, 255, 0)",
  },
  "50%": {
    boxShadow: "0 24px #54C3F6, 24px 24px #54C3F6, 24px 48px #54C3F6, 0px 48px #54C3F6",
  },
  "62%": {
    boxShadow:
      "0 24px rgba(136, 148, 255, 0), 24px 24px #54C3F6, 24px 48px #54C3F6, 0px 48px #54C3F6",
  },
  "75%": {
    boxShadow:
      "0 24px rgba(136, 148, 255, 0), 24px 24px rgba(136, 148, 255, 0), 24px 48px #54C3F6, 0px 48px #54C3F6",
  },
  "87%": {
    boxShadow:
      "0 24px rgba(136, 148, 255, 0), 24px 24px rgba(136, 148, 255, 0), 24px 48px rgba(136, 148, 255, 0), 0px 48px #54C3F6",
  },
  "100%": {
    boxShadow:
      "0 24px rgba(136, 148, 255, 0), 24px 24px rgba(136, 148, 255, 0), 24px 48px rgba(136, 148, 255, 0), 0px 48px rgba(136, 148, 255, 0)",
  },
});

const animloader2 = keyframes({
  "0%": {
    transform: "translate(0, 0) rotateX(0) rotateY(0)",
  },
  "25%": {
    transform: "translate(100%, 0) rotateX(0) rotateY(180deg)",
  },
  "50%": {
    transform: "translate(100%, 100%) rotateX(-180deg) rotateY(180deg)",
  },
  "75%": {
    transform: "translate(0, 100%) rotateX(-180deg) rotateY(360deg)",
  },
  "100%": {
    transform: "translate(0, 0) rotateX(0) rotateY(360deg)",
  },
});

export const loader = style({
  width: "48px",
  height: "48px",
  display: "inline-block",
  position: "relative",
  transform: "rotate(45deg)",
  "::before": {
    content: '""',
    boxSizing: "border-box",
    width: "24px",
    height: "24px",
    position: "absolute",
    left: "0",
    top: "-24px",
    animation: `${animloader} 4s ease infinite`,
  },
  "::after": {
    content: '""',
    boxSizing: "border-box",
    position: "absolute",
    left: "0",
    top: "0",
    width: "24px",
    height: "24px",
    background: "#54C3F6",
    boxShadow: `0 0 4px ${vars.colors.$static.light.gray}`,
    animation: `${animloader2} 2s ease infinite`,
  },
});
