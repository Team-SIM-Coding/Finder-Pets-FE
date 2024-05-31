"use client";

import * as cs from "@/shared/styles/common.css";
import * as s from "./CommentsStyle.css";

import { Button } from "@design-system/react-components-button";

import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

import useAlertContext from "@/hooks/useAlertContext";

import { IComment } from "@/models/comment";

import { useRecoilValue } from "recoil";
import authState from "@/recoil/authAtom";

import { useParams, usePathname, useRouter } from "next/navigation";
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
  const { isLoggedIn } = useRecoilValue(authState);

  const path = usePathname();
  const parts = path.split("/");
  const extractedPath = `/${parts[1]}/${parts[2]}`;

  const router = useRouter();

  const { open, close } = useAlertContext();

  const storageKey = PATH_TYPE[extractedPath];

  const handleRegisterComment = async () => {
    const newComment: IComment = {
      comment_id: "",
      comment,
      created_at: new Date().toISOString(),
    };

    console.log(isLoggedIn);

    if (!isLoggedIn) {
      open({
        width: "300px",
        height: "240px",
        title: "로그인 확인",
        main: (
          <AlertMainTextBox text="로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?" />
        ),
        leftButtonLabel: "취소",
        leftButtonStyle: cs.whiteButton,
        rightButtonStyle: cs.defaultButton,
        onLeftButtonClick: () => {
          close();
        },
        onRightButtonClick: () => {
          router.push("/login");
          close();
        },
        onBackDropClick: () => {
          close();
        },
      });
    } else {
      if (comment.trim() === "") {
        open({
          width: "300px",
          height: "200px",
          title: "댓글 등록 확인",
          main: <AlertMainTextBox text="댓글 내용을 입력해주세요." />,
          rightButtonStyle: cs.defaultButton,
          onRightButtonClick: () => {
            close();
          },
        });
      } else {
        const response = await fetch(`/api/${storageKey}/${id}/comment/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newComment),
        });
        if (response.ok) {
          const data = await response.json();
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
        }
      }
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
