import * as s from "@/shared/styles/common.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  height: string;
}

const Spacing = ({ height }: Props) => {
  return (
    <div
      style={assignInlineVars({ [s.spacingHeightVar]: height })}
      className={s.spacingStyle}
    ></div>
  );
};

export default Spacing;
