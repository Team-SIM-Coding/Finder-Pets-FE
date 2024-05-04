import Spacing from "../Spacing";
import UserAndCreateAt from "../UserAndCreateAt";
import CommentRegisterButton from "./CommentRegisterButton";
import * as s from "./CommentsStyle.css";

const CommentWriter = () => {
  return (
    <div className={s.commentWriterWrap}>
      <div className={s.commentWriterUserInfo}>
        <UserAndCreateAt
          user_image="/images/user_profile.jpeg"
          user_name="이종현"
          width={28}
          height={28}
        />
      </div>
      <Spacing height="12px" />
      <textarea className={s.commentWriterTextArea}></textarea>
      <CommentRegisterButton />
      <Spacing height="24px" />
    </div>
  );
};

export default CommentWriter;
