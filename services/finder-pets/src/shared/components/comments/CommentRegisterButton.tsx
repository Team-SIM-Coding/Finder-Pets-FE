"use client";
import { useParams, usePathname } from "next/navigation";
import * as s from "./CommentsStyle.css";

import { Button } from "@design-system/react-components-button";
import { useEffect, useState } from "react";
import { waitForMSWActivation } from "@/shared/mocks/waitForWorkerActivation";

export const PATH_TYPE: Record<string, string> = {
  "/finder/lost": "lost",
  "/finder/sighted": "sighted",
  "/community/reunion-reviews": "review",
  "/community/pet-stories": "pet-story",
};

const TEST_COMMENT = "댓글 등록 테스트!";

const CommentRegisterButton = () => {
  const [comments, setComments] = useState([]);

  const { id } = useParams();
  const path = usePathname();
  const parts = path.split("/");
  const extractedPath = `/${parts[1]}/${parts[2]}`;

  const storageKey = PATH_TYPE[extractedPath];

  const handleRegisterComment = async () => {
    const response = await fetch(`/api/${storageKey}/${id}/comment/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_COMMENT),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("댓글 등록이 완료되었습니다.", data);
      fetchComments();
    } else {
      const data = await response.json();
      console.log("댓글 등록이 실패되었습니다.", data);
    }
  };

  const fetchComments = async () => {
    const response = await fetch(`/api/${storageKey}/${id}/comments`);

    if (response.ok) {
      const data = await response.json();
      setComments(data);
      console.log("댓글 리스트 조회 성공 : ", data);
    } else {
      const data = await response.json();
      console.log("댓글 리스트 조회 실패 : ", data);
    }
  };

  useEffect(() => {
    (async () => {
      waitForMSWActivation();
      fetchComments();
    })();
  }, []);

  console.log(comments);

  return (
    <div className={s.commentRegisterButtonWrap}>
      <Button className={s.commentRegisterButton} onClick={handleRegisterComment}>
        등록
      </Button>
    </div>
  );
};

export default CommentRegisterButton;
