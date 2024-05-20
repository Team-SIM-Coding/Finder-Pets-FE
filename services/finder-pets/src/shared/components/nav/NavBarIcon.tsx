import * as s from "./NavBarStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  isActive: boolean;
  text: string;
}

const NavBarIcon = ({ icon, isActive, text }: Props) => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={isActive ? s.activeIconWrap : s.navIconWrap}
    >
      {icon}
      <span className={s.navIconText}>{text}</span>
    </Flex>
  );
};

export default NavBarIcon;
