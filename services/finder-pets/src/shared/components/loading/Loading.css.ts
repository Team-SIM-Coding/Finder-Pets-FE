import { style, keyframes } from "@vanilla-extract/css";

export const centered = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", // 전체 뷰포트 높이
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinner = style({
  border: "16px solid #f3f3f3",
  borderTop: "16px solid #3498db",
  borderRadius: "50%",
  width: "120px",
  height: "120px",
  marginBottom: "60px",
  animation: `${spin} 2s linear infinite`,
});
