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
  cursor: "pointer",
  opacity: 0,
});

export const labelStyle = style({
  width: "60px",
  fontSize: "14px",
});

export const editorInputStyle = style({
  padding: "10px",
});

export const editorInputLabel = style([labelStyle]);

export const editorTextareaLabel = style([
  labelStyle,
  {
    alignSelf: "flex-start",
    marginTop: "12px",
  },
]);

export const editorTextBoxDefault = style({
  marginLeft: "8px",
  border: "1px solid #DCD6D6",
  borderRadius: "4px",
});

export const editorTextAreaStyle = style([
  editorTextBoxDefault,
  {
    flex: 1,
    height: "150px",
    padding: "12px",
  },
]);

export const editorTextAreaLargeStyle = style([
  editorTextBoxDefault,
  {
    flex: 1,
    height: "350px",
  },
]);

export const editorInputMediumStyle = style([
  editorTextBoxDefault,
  {
    flex: 1,
    height: "40px",
    padding: "0px 10px",
  },
]);

export const editorInputSmallStyle = style([
  editorTextBoxDefault,
  {
    width: "108px",
    height: "40px",
    padding: "0px 10px",
  },
]);

export const editorSelectStyle = style([
  editorTextBoxDefault,
  {
    width: "108px",
    height: "40px",
    textAlign: "center",
  },
]);

export const editorCheckBoxWrap = style({
  height: "40px",
});

export const editorCheckBoxLabelWrap = style({
  width: "120px",
  marginRight: "24px",
  textAlign: "left",
});

export const editorCheckBoxInputWrap = style({
  marginRight: "24px",
});
