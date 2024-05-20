import * as cs from "@/styles/common.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  width?: string;
  height?: string;
}

const Spacing = ({ width = "100%", height }: Props) => {
  return (
    <div
      style={assignInlineVars({ [cs.spacingWidthVar]: width, [cs.spacingHeightVar]: height })}
      className={cs.spacingStyle}
    ></div>
  );
};

export default Spacing;
