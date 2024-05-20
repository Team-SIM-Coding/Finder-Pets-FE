"use client";

import * as cs from "@/styles/common.css";
import * as s from "./CommentsStyle.css";
import { CiMenuKebab } from "react-icons/ci";

import { Flex } from "@design-system/react-components-layout";

import useAlertContext from "@/hooks/useAlertContext";

import { Image } from "@/models/image";

import UserAndCreateAt from "@/shared/components/UserAndCreateAt";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";
import { PATH_TYPE } from "@/shared/components/comments/CommentUpdateAndCancelButtons";
import CommentUpdater from "@/shared/components/comments/CommentUpdater";

import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Props {
  user_image: Image;
  user_name: string;
  comment_id: string;
  created_at: string;
  comment: string;
}

const Comment = ({ user_image, user_name, comment_id, created_at, comment }: Props) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();
  const [isOpenTextBox, setIsOpenTextBox] = useState(false);

  const path = usePathname();
  const parts = path.split("/");
  const extractedPath = `/${parts[1]}/${parts[2]}`;

  const { open, close } = useAlertContext();

  const storageKey = PATH_TYPE[extractedPath];
  const commentBoxRef = useRef<HTMLDivElement>(null);

  const handleMenuKebabClick = () => {
    setIsOpenTextBox((prev) => !prev);
  };

  const handleOpenDeletePopUp = () => {
    open({
      width: "300px",
      height: "200px",
      title: "댓글 삭제",
      main: <AlertMainTextBox text="댓글을 삭제 하시겠습니까?" />,
      leftButtonLabel: "취소",
      leftButtonStyle: cs.whiteButton,
      rightButtonStyle: cs.defaultButton,
      onLeftButtonClick: () => {
        close();
      },
      onRightButtonClick: () => {
        handleDeleteComment();
        close();
      },
    });
  };

  const handleDeleteComment = async () => {
    const response = await fetch(`/api/${storageKey}/${id}/comment/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment_id }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("댓글이 삭제 되었습니다.", data);
      open({
        width: "300px",
        height: "200px",
        title: "댓글 삭제",
        main: <AlertMainTextBox text="댓글이 삭제 되었습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
        },
      });
    } else {
      const data = await response.json();
      console.log("댓글 삭제가 실패 되었습니다.", data);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (commentBoxRef.current && !commentBoxRef.current.contains(event.target as Node)) {
      setIsOpenTextBox(false);
    }
  };

  useEffect(() => {
    if (isOpenTextBox) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenTextBox]);

  return (
    <div className={s.commentWrap} ref={commentBoxRef}>
      {!isUpdate && (
        <>
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
                <span
                  className={s.deleteAndModifyText}
                  onClick={() => setIsUpdate((prev) => !prev)}
                >
                  수정
                </span>
                <span className={s.deleteAndModifyText} onClick={handleOpenDeletePopUp}>
                  삭제
                </span>
              </Flex>
            )}
          </Flex>
          <div className={s.commentTextWrap}>
            <p>{comment}</p>
          </div>
        </>
      )}
      {isUpdate && (
        <CommentUpdater
          comment={comment}
          comment_id={comment_id}
          setIsUpdate={setIsUpdate}
          setIsOpenTextBox={setIsOpenTextBox}
        />
      )}
    </div>
  );
};

export default Comment;
