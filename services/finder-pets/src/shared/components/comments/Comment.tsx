"use client";
import * as s from "./CommentsStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { CiMenuKebab } from "react-icons/ci";
import UserAndCreateAt from "../UserAndCreateAt";
import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { PATH_TYPE } from "./CommentRegisterButton";
import { Image } from "@/models/image";

interface Props {
  user_image: Image;
  user_name: string;
  created_at: string;
  comment: string;
}

const Comment = ({ user_image, user_name, created_at, comment }: Props) => {
  const { id } = useParams();
  const [isOpenTextBox, setIsOpenTextBox] = useState(false);

  const path = usePathname();
  const parts = path.split("/");
  const extractedPath = `/${parts[1]}/${parts[2]}`;

  const storageKey = PATH_TYPE[extractedPath];

  const handleMenuKebabClick = () => {
    setIsOpenTextBox((prev) => !prev);
  };

  const handleDeleteComment = async () => {
    const response = await fetch(`/api/${storageKey}/${id}/comment/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment_id: "1" }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("댓글이 삭제 되었습니다.", data);
    } else {
      const data = await response.json();
      console.log("댓글 삭제가 실패 되었습니다.", data);
    }
  };

  return (
    <div className={s.commentWrap}>
      <Flex justify="space-between" align="center" className={s.CommentBoxWrap}>
        <UserAndCreateAt
          user_image={user_image}
          user_name={user_name}
          create_at={created_at}
          width={48}
          height={48}
        />
        <CiMenuKebab className={s.iconStyle} onClick={handleMenuKebabClick} />
        {isOpenTextBox && (
          <Flex
            direction="column"
            justify="space-around"
            align="center"
            className={s.deleteAndModifyBox}
          >
            <span className={s.deleteAndModifyText}>수정</span>
            <span className={s.deleteAndModifyText} onClick={handleDeleteComment}>
              삭제
            </span>
          </Flex>
        )}
      </Flex>
      <div className={s.commentTextWrap}>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
