import * as s from "./CommentsStyle.css";
import Comment from "./Comment";

const CommentsList = () => {
  return (
    <div className={s.commentsSection}>
      <Comment
        user_image="/images/user_profile.jpeg"
        user_name="이종현"
        created_at="4시간 전"
        comment="댓글 내용 테스트"
      />
      <Comment
        user_image="/images/user_profile.jpeg"
        user_name="이종현"
        created_at="4시간 전"
        comment="댓글 내용 테스트"
      />
    </div>
  );
};

export default CommentsList;
