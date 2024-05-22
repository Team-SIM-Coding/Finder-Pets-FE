import * as s from "./SkeletonStyle.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  width?: string;
  height: string;
}

const Skeleton = ({ width, height }: Props) => {
  return (
    <div
      className={s.skeletonWrap}
      style={assignInlineVars({ [s.skeletonHeight]: height, [s.skeletonWidth]: width })}
    />
  );
};

export default Skeleton;
