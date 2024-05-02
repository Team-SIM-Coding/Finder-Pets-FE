"use client";
import * as s from "./TabStyle.css";

import { usePathname } from "next/navigation";

import { Flex } from "@design-system/react-components-layout";
import { vars } from "@design-system/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Link from "next/link";

interface Props {
  firstTab: string;
  secondTab: string;
  firstPath: string;
  secondPath: string;
}

const TabMenuBar = ({ firstTab, secondTab, firstPath, secondPath }: Props) => {
  const path = usePathname();
  const getPathStyle = (currentPath: string) => {
    return assignInlineVars({
      [s.currentPathColor]: path === currentPath ? vars.colors.$scale.blue[500] : "#DFDFDF",
    });
  };

  const lostPathColor = getPathStyle("/finder/lost");
  const sightedPathColor = getPathStyle("/finder/sighted");

  return (
    <Flex align="center" className={s.tabMenuWrap}>
      <Link href={firstPath} className={s.tabBox} style={lostPathColor}>
        <div>
          <span>{firstTab}</span>
        </div>
      </Link>
      <Link href={secondPath} className={s.tabBox} style={sightedPathColor}>
        <div>
          <span>{secondTab}</span>
        </div>
      </Link>
    </Flex>
  );
};

export default TabMenuBar;
