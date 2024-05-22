"use client";

import { IoMdHeartEmpty } from "react-icons/io";
import * as s from "./NavBarStyle.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

import NavBarSearchInput from "@/shared/c/nav/NavBarSearchInput";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShareButton from "@/shared/c/nav/ShareButton";

const NAVBAR_EXCLUSION_PATHS = [
  "/register",
  "/login",
  "/find-id",
  "/find-password",
  "/reset-password",
];

const NAVBAR_SEARCH_INCLUDES_PATHS = [
  "/shelter",
  "/finder/lost",
  "/finder/sighted",
  "/community/reunion-reviews",
  "/community/pet-stories",
];

const MY_PET_REGISTER_BUTTON_PATH = "/my-menu";

const SHARE_BUTTON_PATHS = [
  "/shelter",
  "/finder/lost",
  "/finder/sighted",
  "/community/reunion-reviews",
  "/community/pet-stories",
];

const shouldShowShareButton = (path: string) => {
  return SHARE_BUTTON_PATHS.some((sharePath) => {
    if (path.startsWith(sharePath)) {
      const pathSegments = path.split("/");

      return pathSegments.length > 2;
    }
    return false;
  });
};

const shouldShowLikeButton = (path: string) => {
  return SHARE_BUTTON_PATHS.filter((sharePath) => sharePath !== "/shelter").some((sharePath) => {
    if (path.startsWith(sharePath)) {
      const pathSegments = path.split("/");

      return pathSegments.length > 2;
    }
    return false;
  });
};

const NavBarTop = () => {
  const path = usePathname();

  if (NAVBAR_EXCLUSION_PATHS.includes(path)) return null;

  const showShareButton = shouldShowShareButton(path);
  const showLikeButton = shouldShowLikeButton(path);

  return (
    <section className={s.navTopSection}>
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Image
            src="/images/finder-pets-logo.png"
            width={120}
            height={25}
            alt="로고 이미지"
            className={s.navLogoImage}
          />
        </Link>
        {NAVBAR_SEARCH_INCLUDES_PATHS.includes(path) && <NavBarSearchInput />}
        {MY_PET_REGISTER_BUTTON_PATH === path && (
          <Link href="/my-menu/my-pets/register">
            <Button className={s.myPetRegisterButton}>반려동물 등록</Button>
          </Link>
        )}
        {(showShareButton || showLikeButton) && (
          <Flex className={s.shareAndLikeButtonWrap}>
            {showShareButton && <ShareButton />}
            {showLikeButton && <IoMdHeartEmpty className={s.likeButtonIcon} />}
          </Flex>
        )}
      </Flex>
    </section>
  );
};

export default NavBarTop;
