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
import BackButton from "./BackButton";

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

const BACK_BUTTON_PATHS = [
  "/shelter",
  "/finder/lost",
  "/finder/sighted",
  "/community/reunion-reviews",
  "/community/pet-stories",
  "/my-menu/profile",
  "/my-menu/my-pets",
];

const BACK_BUTTON_NAME: Record<string, string> = {
  "/shelter": "보호소",
  "/finder/lost": "실종",
  "/finder/sighted": "목격",
  "/community/reunion-reviews": "재회 후기",
  "/community/pet-stories": "반려 이야기",
  "/my-menu": "마이 메뉴",
  "/my-menu/my-pets": "나의 반려동물",
};

const shouldShowShareButton = (path: string) => {
  return SHARE_BUTTON_PATHS.some((sharePath) => {
    if (path.startsWith(sharePath)) {
      const pathSegments = path.split("/");

      return (
        pathSegments.length > 3 ||
        (pathSegments.length > 2 && pathSegments[1] === "shelter") ||
        pathSegments.includes("/my-menu/profile")
      );
    }
    return false;
  });
};

const shouldShowBackButton = (path: string) => {
  return BACK_BUTTON_PATHS.some((sharePath) => {
    if (path.startsWith(sharePath)) {
      const pathSegments = path.split("/");

      return (
        pathSegments.length > 3 ||
        (pathSegments.length > 2 && pathSegments[1] === "shelter") ||
        (pathSegments.length > 2 && pathSegments[2] === "profile") ||
        (pathSegments.length > 2 && pathSegments[2] === "my-pets")
      );
    }
    return false;
  });
};

const shouldShowLikeButton = (path: string) => {
  return SHARE_BUTTON_PATHS.filter((likePath) => likePath !== "/shelter").some((likePath) => {
    if (path.startsWith(likePath)) {
      const pathSegments = path.split("/");

      return pathSegments.length > 3;
    }
    return false;
  });
};

const getButtonName = (buttonObject: Record<string, string>, path: string) => {
  const pathSegments = path.split("/");

  if (pathSegments.length > 3 && path.includes("/my-menu/my-pets")) return "나의 반려동물";

  return Object.entries(buttonObject).find(([key]) => path.includes(key))?.[1] || "";
};

const getButtonLink = (buttonObject: Record<string, string>, path: string) => {
  const pathSegments = path.split("/");

  if (pathSegments.length > 3 && path.includes("/my-menu/my-pets")) return "/my-menu/my-pets";

  return Object.entries(buttonObject).find(([key]) => path.includes(key))?.[0] || "";
};

const NavBarTop = () => {
  const path = usePathname();

  const buttonName = getButtonName(BACK_BUTTON_NAME, path);
  const buttonLink = getButtonLink(BACK_BUTTON_NAME, path);

  if (NAVBAR_EXCLUSION_PATHS.includes(path)) return null;

  const showShareButton = shouldShowShareButton(path);
  const showBackButton = shouldShowBackButton(path);
  const showLikeButton = shouldShowLikeButton(path);

  return (
    <section className={s.navTopSection}>
      <Flex justify="space-between" align="center">
        {showBackButton && (
          <Link href={buttonLink} className={s.backButtonLinkStyle}>
            <BackButton button_name={buttonName || "뒤로가기"} />
          </Link>
        )}
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
