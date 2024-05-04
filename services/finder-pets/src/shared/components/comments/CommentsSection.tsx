import * as s from "./CommentsStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { ReactNode } from "react";
import Spacing from "../Spacing";

interface Props {
  comment_count: number;
  comments: ReactNode;
  writer: ReactNode;
}

const CommentsSection = ({ comment_count, comments, writer }: Props) => {
  return (
    <section>
      <Spacing height="12px" />
      <Flex justify="space-between">
        <span className={s.commentTitleText}>댓글</span>
        <span className={s.commentSmallText}>댓글 {comment_count}</span>
      </Flex>
      <div>{comments && comments}</div>
      <div>{writer && writer}</div>
      <Spacing height="24px" />
    </section>
  );
};

export default CommentsSection;