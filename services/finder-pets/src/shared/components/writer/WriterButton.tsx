"use client";

import * as s from "./WriterButtonStyle.css";
import { PiPencilSimpleBold } from "react-icons/pi";

import { Flex } from "@design-system/react-components-layout";
import { Button } from "@design-system/react-components-button";

import { useRecoilValue } from "recoil";
import authState from "@/recoil/authAtom";

import { usePathname } from "next/navigation";
import Link from "next/link";

const WRITE_BUTTON_INCLUDES_PATHS = [
  "/finder/lost",
  "/finder/sighted",
  "/community/reunion-reviews",
  "/community/pet-stories",
];

const WriterButton = () => {
  const path = usePathname();
  const { isLoggedIn } = useRecoilValue(authState);

  if (!WRITE_BUTTON_INCLUDES_PATHS.includes(path)) return null;
  if (!isLoggedIn) return null;

  return (
    <Link
      href={`${path.includes("finder") ? "/finder/register" : path.includes("community") ? "/community/register" : ""}`}
      className={s.writerButtonWrap}
    >
      <Button className={s.buttonStyle}>
        <Flex direction="column" justify="center" align="center">
          <PiPencilSimpleBold className={s.iconStyle} />
          <span className={s.buttonText}>글쓰기</span>
        </Flex>
      </Button>
    </Link>
  );
};

export default WriterButton;
