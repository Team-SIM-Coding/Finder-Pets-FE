"use client";

import * as cs from "@/styles/common.css";
import { CiMenuKebab } from "react-icons/ci";
import * as s from "./LikeAndViewStyle.css";

import { Flex } from "@design-system/react-components-layout";

import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

import useAlertContext from "@/hooks/useAlertContext";

import authState from "@/recoil/authAtom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

import { fetchUpdateLostPet } from "@/api/mocks/putUpdateLostPet";
import { fetchUpdateSightedPet } from "@/api/mocks/putUpdateSightedPet";
import { FinderPet } from "@/models/finder";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Spacing from "../spacing/Spacing";

interface Props {
  like_count: number;
  view_count: number;
  type?: string;
}

interface UpdatePayload<T> {
  id: string;
  data: T;
}

const refetchQueryType: Record<string, string> = {
  lost: "lost-pets",
  sighted: "sighted-pets",
  "pet-story": "pet-stories",
  review: "reviews",
};

const LikeAndViewBar = ({ like_count, view_count, type }: Props) => {
  const { id } = useParams();
  const { isLoggedIn } = useRecoilValue(authState);

  const path = usePathname();
  const parts = path.split("/");
  const extractedPath = `/${parts[1]}/${parts[2]}`;

  const router = useRouter();

  const queryClient = useQueryClient();

  const { open, close } = useAlertContext();

  const [isOpenTextBox, setIsOpenTextBox] = useState(false);

  const likeAndViewBarBoxRef = useRef<HTMLDivElement>(null);

  const getFinderPetMutationFn = () => {
    if (parts[2] === "lost") {
      return async ({ id, data }: UpdatePayload<FinderPet>) => fetchUpdateLostPet(id, data);
    } else if (parts[2] === "sighted") {
      return async ({ id, data }: UpdatePayload<FinderPet>) => fetchUpdateSightedPet(id, data);
    }
    return;
  };

  const { mutate: finderMutate } = useMutation<FinderPet, unknown, UpdatePayload<FinderPet>>({
    mutationFn: getFinderPetMutationFn(),
    onSuccess: () => {
      open({
        width: "300px",
        height: "240px",
        title: `${parts[2] === "lost" ? "실종" : "목격"} 게시글 완료 등록`,
        main: <AlertMainTextBox text="게시글이 완료 상태로 전환되어 있습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
        },
      });
    },
  });

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

      const typeMatch = type as string;

      await queryClient.refetchQueries({
        queryKey: [`${refetchQueryType[typeMatch]}`],
      });

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

  const openPopUpChangeCompletedPost = async () => {
    open({
      width: "300px",
      height: "240px",
      title: `${parts[2] === "lost" ? "실종" : "목격"} 게시글 완료 등록`,
      main: <AlertMainTextBox text="게시글을 완료 상태로 전환하시겠습니까?" />,
      leftButtonLabel: "취소",
      leftButtonStyle: cs.whiteButton,
      rightButtonStyle: cs.defaultButton,
      onLeftButtonClick: () => {
        close();
      },
      onRightButtonClick: () => {
        close();
      },
      onBackDropClick: () => {
        close();
      },
    });
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
        {isLoggedIn && <CiMenuKebab className={s.iconStyle} onClick={handleMenuKebabClick} />}
        {isOpenTextBox && (
          <Flex
            direction="column"
            justify="space-around"
            align="center"
            className={s.deleteAndModifyBox}
          >
            <Spacing margin="8px" />
            <Link href={`${extractedPath}/${id}/update`} className={s.deleteAndModifyText}>
              <span>수정</span>
            </Link>
            <Spacing margin="8px" />
            <span className={s.deleteAndModifyText} onClick={handleOpenDeletePopUp}>
              삭제
            </span>
            <Spacing margin="8px" />
            {(parts[2] === "lost" || parts[2] === "sighted") && (
              <>
                <span className={s.deleteAndModifyText} onClick={openPopUpChangeCompletedPost}>
                  완료
                </span>
                <Spacing margin="8px" />
              </>
            )}
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default LikeAndViewBar;
