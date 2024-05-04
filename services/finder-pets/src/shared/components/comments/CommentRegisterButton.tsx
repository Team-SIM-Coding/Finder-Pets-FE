import * as s from "./CommentsStyle.css";

import { Button } from "@design-system/react-components-button";

const CommentRegisterButton = () => {
  return (
    <div className={s.commentRegisterButtonWrap}>
      <Button className={s.commentRegisterButton}>등록</Button>
    </div>
  );
};

export default CommentRegisterButton;
