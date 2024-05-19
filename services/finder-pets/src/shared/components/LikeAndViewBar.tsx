"use client";

import useAlertContext from "@/hooks/useAlertContext";
import * as s from "./LikeAndViewStyle.css";
import * as cs from "@/shared/styles/common.css";

import { Flex } from "@design-system/react-components-layout";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { CiMenuKebab } from "react-icons/ci";
import AlertMainTextBox from "./alert/AlertMainTextBox";

interface Props {
  like_count: number;
  view_count: number;
  type?: string;
}

const LikeAndViewBar = ({ like_count, view_count, type }: Props) => {
  const { id } = useParams();
  const router = useRouter();

  const { open, close } = useAlertContext();

  const [isOpenTextBox, setIsOpenTextBox] = useState(false);

  const likeAndViewBarBoxRef = useRef<HTMLDivElement>(null);

  const handleOpenDeletePopUp = () => {
    open({
      width: "300px",
      height: "200px",
      title: "게시글 삭제",
      main: <AlertMainTextBox text="게시글을 삭제 하시겠습니까?" />,
      leftButtonLabel: "취소",
      leftButtonStyle: cs.whiteButton,
      rightButtonStyle: cs.defaultButton,
      onLeftButtonClick: () => {
        close();
      },
      onRightButtonClick: () => {
        handleDeletePost();
        close();
      },
    });
  };

  const handleDeletePost = async () => {
    const response = await fetch(`/api/${type}/delete/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const data = await response.json();
      console.log("해당 게시글이 정상적으로 삭제되었습니다.", data);
      open({
        width: "300px",
        height: "200px",
        title: "게시글 삭제",
        main: <AlertMainTextBox text="해당 게시글이 정상적으로 삭제되었습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          router.push(
            `${type === "lost" || type === "sighted" ? "/finder/lost" : "/community/reunion-reviews"}`,
          );
          close();
        },
      });
    } else {
      const data = await response.json();
      console.log("해당 포스트 삭제가 실패 되었습니다.", data);
    }
  };

  const handleMenuKebabClick = () => {
    setIsOpenTextBox((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      likeAndViewBarBoxRef.current &&
      !likeAndViewBarBoxRef.current.contains(event.target as Node)
    ) {
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
    <div ref={likeAndViewBarBoxRef}>
      <Flex align="center" className={s.likeAndViewBarWrap}>
        <span className={s.text}>좋아요 {like_count}</span>
        <div className={s.dividerStyle} />
        <span className={s.text}>조회수 {view_count}</span>
        <CiMenuKebab className={s.iconStyle} onClick={handleMenuKebabClick} />
        {isOpenTextBox && (
          <Flex
            direction="column"
            justify="space-around"
            align="center"
            className={s.deleteAndModifyBox}
          >
            {/* <span className={s.deleteAndModifyText}>수정</span> */}
            <span className={s.deleteAndModifyText} onClick={handleOpenDeletePopUp}>
              삭제
            </span>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default LikeAndViewBar;
