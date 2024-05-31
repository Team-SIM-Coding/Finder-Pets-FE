"use client";

import * as cs from "@/styles/common.css";
import * as s from "./CommentsStyle.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

import useAlertContext from "@/hooks/useAlertContext";

import { useParams, usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export const PATH_TYPE: Record<string, string> = {
  "/finder/lost": "lost",
  "/finder/sighted": "sighted",
  "/community/reunion-reviews": "review",
  "/community/pet-stories": "pet-story",
};

interface Props {
  comment_id: string;
  comment: string;
  setText: Dispatch<SetStateAction<string>>;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  setIsOpenTextBox: Dispatch<SetStateAction<boolean>>;
}

const CommentUpdateAndCancelButtons = ({
  comment,
  comment_id,
  setText,
  setIsUpdate,
  setIsOpenTextBox,
}: Props) => {
  const { id } = useParams();
  const path = usePathname();
  const parts = path.split("/");
  const extractedPath = `/${parts[1]}/${parts[2]}`;

  const { open, close } = useAlertContext();

  const storageKey = PATH_TYPE[extractedPath];

  const handleUpdateComment = async () => {
    const response = await fetch(`/api/${storageKey}/${id}/comment/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment_id, comment, created_at: new Date().toISOString }),
    });

    if (response.ok) {
      const data = await response.json();
      open({
        width: "300px",
        height: "200px",
        title: "댓글 수정",
        main: <AlertMainTextBox text="댓글이 수정 되었습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          setText("");
          setIsUpdate(false);
          setIsOpenTextBox(false);
          close();
        },
      });
    } else {
      const data = await response.json();
    }
  };

  const handleCancel = () => {
    setIsOpenTextBox(false);
    setIsUpdate(false);
  };

  return (
    <Flex className={s.commentUpdateAndCancelButtonWrap}>
      <Button className={s.commentUpdateAndCancelButton} onClick={handleCancel}>
        취소
      </Button>
      <Button className={s.commentUpdateAndCancelButton} onClick={handleUpdateComment}>
        수정
      </Button>
    </Flex>
  );
};

export default CommentUpdateAndCancelButtons;
