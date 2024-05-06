import * as s from "./DetailStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const DetailMainHeader = ({ left, right }: Props) => {
  return (
    <Flex justify="space-between" align="center" className={s.detailMainHeader}>
      <>{left}</>
      <>{right}</>
    </Flex>
  );
};

export default DetailMainHeader;
