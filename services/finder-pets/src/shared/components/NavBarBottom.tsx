"use client";

import * as s from "./NavBarStyle.css";

import { RiHome2Line } from "react-icons/ri";
import { LuShield } from "react-icons/lu";
import { PiBellSimpleRingingLight } from "react-icons/pi";
import { RiBookLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

import { Flex } from "@design-system/react-components-layout";
import NavBarIcon from "./NavBarIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAVBAR_EXCLUSION_PATHS = [
  "/register",
  "/login",
  "/find-id",
  "/find-password",
  "/reset-password",
  "/my-menu/profile",
  "/my-menu/my-pets",
];

const NAVBAR_ICON_LIST = [
  { id: 1, image: <RiHome2Line />, name: "홈", path: "/", relatedPaths: [] },
  { id: 2, image: <LuShield />, name: "보호소", path: "/shelter", relatedPaths: [] },
  {
    id: 3,
    image: <PiBellSimpleRingingLight />,
    name: "실종/제보",
    path: "/finder/lost",
    relatedPaths: ["/finder/sighted"],
  },
  {
    id: 4,
    image: <RiBookLine />,
    name: "커뮤니티",
    path: "/community/reunion-reviews",
    relatedPaths: ["/community/pet-stories"],
  },
  { id: 5, image: <IoPersonOutline />, name: "마이메뉴", path: "/my-menu", relatedPaths: [] },
];

const NavBarBottom = () => {
  const path = usePathname();

  const shouldExclude = NAVBAR_EXCLUSION_PATHS.some((excludedPath) =>
    path.startsWith(excludedPath),
  );

  if (shouldExclude) return null;

  return (
    <section className={s.navBottomSection}>
      <Flex justify="space-around">
        {NAVBAR_ICON_LIST.map((icon) => (
          <Link href={icon.path} key={icon.id} className={s.navIconLink}>
            <NavBarIcon
              icon={icon.image}
              text={icon.name}
              isActive={path === icon.path || icon.relatedPaths.includes(path)}
            />
          </Link>
        ))}
      </Flex>
    </section>
  );
};

export default NavBarBottom;
