"use client";

import * as s from "./NavBarStyle.css";

import { Flex } from "@design-system/react-components-layout";
import Link from "next/link";
import Image from "next/image";
import NavBarSearchInput from "./NavBarSearchInput";
import { usePathname } from "next/navigation";

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

const NavBarTop = () => {
  const path = usePathname();

  if (NAVBAR_EXCLUSION_PATHS.includes(path)) return null;

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
      </Flex>
    </section>
  );
};

export default NavBarTop;
