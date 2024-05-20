"use client";

import * as s from "./CommentsStyle.css";

import Spacing from "@/shared/c/spacing/Spacing";
import UserAndCreateAt from "@/shared/c/nav/UserAndCreateAt";
import CommentUpdateAndCancelButtons from "@/shared/components/comments/CommentUpdateAndCancelButtons";

import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  comment: string;
  comment_id: string;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  setIsOpenTextBox: Dispatch<SetStateAction<boolean>>;
}

const CommentUpdater = ({ comment, comment_id, setIsUpdate, setIsOpenTextBox }: Props) => {
  const [text, setText] = useState(comment);

  const handleWriterTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={s.commentWriterWrap}>
      <div className={s.commentWriterUserInfo}>
        <UserAndCreateAt
          user_image={{ img_id: "user1", url: "/images/user_profile.jpeg" }}
          user_name="이종현"
          width={28}
          height={28}
        />
      </div>
      <Spacing height="12px" />
      <textarea
        className={s.commentWriterTextArea}
        onChange={handleWriterTextChange}
        value={text}
      />
      <CommentUpdateAndCancelButtons
        comment_id={comment_id}
        comment={text}
        setText={setText}
        setIsUpdate={setIsUpdate}
        setIsOpenTextBox={setIsOpenTextBox}
      />
      <Spacing height="24px" />
    </div>
  );
};

export default CommentUpdater;
