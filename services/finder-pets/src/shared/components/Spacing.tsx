import * as s from "@/shared/styles/common.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  width?: string;
  height?: string;
}

const Spacing = ({ width = "100%", height }: Props) => {
  return (
    <div
      style={assignInlineVars({ [s.spacingWidthVar]: width, [s.spacingHeightVar]: height })}
      className={s.spacingStyle}
    ></div>
  );
};

export default Spacing;
