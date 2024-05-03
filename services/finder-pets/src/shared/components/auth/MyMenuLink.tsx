import * as s from "./AuthStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { IoIosArrowForward } from "react-icons/io";

import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

const MyMenuLink = ({ href, label }: Props) => {
  return (
    <Link href={href} className={s.myMenuLinkWrap}>
      <Flex justify="space-between" className={s.myMenuLinkBox}>
        <span className={s.myMenuLinkText}>{label}</span>
        <IoIosArrowForward className={s.myMenuArrowIcon} />
      </Flex>
    </Link>
  );
};

export default MyMenuLink;
