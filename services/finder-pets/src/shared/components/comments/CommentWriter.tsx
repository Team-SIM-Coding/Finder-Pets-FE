"use client";

import { useState } from "react";
import Spacing from "../Spacing";
import UserAndCreateAt from "../UserAndCreateAt";
import CommentRegisterButton from "./CommentRegisterButton";
import * as s from "./CommentsStyle.css";

const CommentWriter = () => {
  const [text, setText] = useState("");

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
      <CommentRegisterButton comment={text} setText={setText} />
      <Spacing height="24px" />
    </div>
  );
};

export default CommentWriter;
