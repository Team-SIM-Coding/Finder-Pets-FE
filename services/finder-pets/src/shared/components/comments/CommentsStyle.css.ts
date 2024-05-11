import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const commentTitleText = style({
  fontSize: "16px",
  fontWeight: "600",
});

export const commentSmallText = style({
  fontSize: "12px",
  color: "#918E8E",
});

export const commentsSection = style({
  margin: "20px 0",
});

export const commentWrap = style({
  margin: "8px 0",
  borderBottom: "1px solid #D9D9D9",
});

export const commentTextWrap = style({
  fontSize: "12px",
  margin: "8px 0",
  padding: "0 4px",
});

export const iconStyle = style({
  width: "24px",
  height: "24px",
  cursor: "pointer",
});

export const commentWriterWrap = style([f.pRelative]);

export const commentWriterTextArea = style({
  width: "100%",
  height: "160px",
  padding: "32px 8px",
  outline: "none",
});

export const commentWriterUserInfo = style([
  f.pAbsolute,
  {
    top: "8px",
    padding: "8px",
  },
]);

export const commentRegisterButtonWrap = style([
  f.pAbsolute,
  {
    bottom: "28px",
    right: "1px",
    width: "52px",
    height: "30px",
    padding: "4px 8px",
    backgroundColor: "white",
    borderTop: "1px solid #CBCBCB",
    borderLeft: "1px solid #CBCBCB",
    textAlign: "center",
  },
]);

export const commentRegisterButton = style({
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
});

export const CommentBoxWrap = style([f.pRelative]);

export const deleteAndModifyBox = style([
  f.pAbsolute,
  {
    right: "20px",
    top: "10px",
    width: "60px",
    height: "60px",
    padding: "8px 12px",
    backgroundColor: "white",
    border: "1px solid #DFDFDF",
    borderRadius: "4px",
    zIndex: "10",
  },
]);

export const deleteAndModifyText = style({
  fontSize: "12px",
  cursor: "pointer",
});
