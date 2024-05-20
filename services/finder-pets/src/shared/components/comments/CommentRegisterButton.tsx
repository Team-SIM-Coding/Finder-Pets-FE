"use client";
import * as cs from "@/shared/styles/common.css";
import { useParams, usePathname } from "next/navigation";
import * as s from "./CommentsStyle.css";

import useAlertContext from "@/hooks/useAlertContext";
import { IComment } from "@/models/comment";
import { Button } from "@design-system/react-components-button";
import AlertMainTextBox from "../alert/AlertMainTextBox";
import { Dispatch, SetStateAction } from "react";

export const PATH_TYPE: Record<string, string> = {
  "/finder/lost": "lost",
  "/finder/sighted": "sighted",
  "/community/reunion-reviews": "review",
  "/community/pet-stories": "pet-story",
};

interface Props {
  comment: string;
  setText: Dispatch<SetStateAction<string>>;
}

const CommentRegisterButton = ({ comment, setText }: Props) => {
  const { id } = useParams();
  const path = usePathname();
  const parts = path.split("/");
  const extractedPath = `/${parts[1]}/${parts[2]}`;

  const { open, close } = useAlertContext();

  const storageKey = PATH_TYPE[extractedPath];

  const handleRegisterComment = async () => {
    const newComment: IComment = {
      comment_id: "",
      comment,
      created_at: new Date().toISOString(),
    };

    const response = await fetch(`/api/${storageKey}/${id}/comment/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("댓글 등록이 완료되었습니다.", data);
      setText("");
      open({
        width: "300px",
        height: "200px",
        title: "댓글 등록",
        main: <AlertMainTextBox text="댓글 등록이 완료되었습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          setText("");
          close();
        },
      });
    } else {
      const data = await response.json();
      console.log("댓글 등록이 실패되었습니다.", data);
    }
  };

  return (
    <div className={s.commentRegisterButtonWrap}>
      <Button className={s.commentRegisterButton} onClick={handleRegisterComment}>
        등록
      </Button>
    </div>
  );
};

export default CommentRegisterButton;
