import * as s from "./LikeAndViewStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { CiMenuKebab } from "react-icons/ci";

interface Props {
  like_count: number;
  view_count: number;
}

const LikeAndViewBar = ({ like_count, view_count }: Props) => {
  return (
    <Flex align="center">
      <span className={s.text}>좋아요 {like_count}</span>
      <div className={s.dividerStyle} />
      <span className={s.text}>조회수 {view_count}</span>
      <CiMenuKebab className={s.iconStyle} />
    </Flex>
  );
};

export default LikeAndViewBar;
