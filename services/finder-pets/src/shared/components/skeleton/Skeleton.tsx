"use client";

import * as s from "./SkeletonStyle.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

interface Props {
  width?: string;
  height: string;
  className?: string;
}

const Skeleton = ({ width, height, className }: Props) => {
  return (
    <div
      className={clsx(s.skeletonWrap, className)}
      style={assignInlineVars({ [s.skeletonHeight]: height, [s.skeletonWidth]: width })}
    />
  );
};

export default Skeleton;
