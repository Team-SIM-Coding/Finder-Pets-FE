import * as s from "./CommentsStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { CiMenuKebab } from "react-icons/ci";
import UserAndCreateAt from "../UserAndCreateAt";

interface Props {
  user_image: string;
  user_name: string;
  created_at: string;
  comment: string;
}

const Comment = ({ user_image, user_name, created_at, comment }: Props) => {
  return (
    <div className={s.commentWrap}>
      <Flex justify="space-between" align="center">
        <UserAndCreateAt user_image={user_image} user_name={user_name} create_at={created_at} />
        <CiMenuKebab className={s.iconStyle} />
      </Flex>
      <div className={s.commentTextWrap}>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
