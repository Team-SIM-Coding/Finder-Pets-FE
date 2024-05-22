import { f } from "@/shared/styles/functions";
import { vars } from "@design-system/themes";
import { createVar, style } from "@vanilla-extract/css";

export const skeletonHeight = createVar();
export const skeletonWidth = createVar();

export const skeletonWrap = style([
  f.wFull,
  {
    width: skeletonWidth,
    height: skeletonHeight,
    margin: "4px",
    borderRadius: "0.125rem",
    backgroundColor: vars.colors.$scale.gray[200],
  },
]);

export const listBoxSkeletonListWrap = style({
  padding: "10px",
});

export const listBoxImageWrap = style({
  borderRadius: "10px",
});

export const listBoxTagStyle = style({
  borderRadius: "4px",
});
