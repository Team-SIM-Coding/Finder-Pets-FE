"use client";

import * as s from "./TabStyle.css";
import { vars } from "@design-system/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { Flex } from "@design-system/react-components-layout";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  firstTab: string;
  secondTab: string;
  firstPath: string;
  secondPath: string;
}

const TAB_MENU_BAR_INCLUDES_PATHS = [
  "/finder/lost",
  "/finder/sighted",
  "/community/reunion-reviews",
  "/community/pet-stories",
];

const TabMenuBar = ({ firstTab, secondTab, firstPath, secondPath }: Props) => {
  const path = usePathname();
  const getPathStyle = (currentPath: string) => {
    return assignInlineVars({
      [s.currentPathColor]: path === currentPath ? vars.colors.$scale.blue[500] : "#DFDFDF",
    });
  };

  const firstPathColor = getPathStyle(firstPath);
  const secondPathColor = getPathStyle(secondPath);

  if (!TAB_MENU_BAR_INCLUDES_PATHS.includes(path)) return null;

  return (
    <Flex align="center" className={s.tabMenuWrap}>
      <Link href={firstPath} className={s.tabBox} style={firstPathColor}>
        <div>
          <span>{firstTab}</span>
        </div>
      </Link>
      <Link href={secondPath} className={s.tabBox} style={secondPathColor}>
        <div>
          <span>{secondTab}</span>
        </div>
      </Link>
    </Flex>
  );
};

export default TabMenuBar;
