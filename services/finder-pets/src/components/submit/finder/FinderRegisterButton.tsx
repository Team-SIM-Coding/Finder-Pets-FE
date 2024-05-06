"use client";
import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";

import { Button } from "@design-system/react-components-button";

const FinderRegisterButton = () => {
  return (
    <>
      <Button className={cs.defaultButton}>등록하기</Button>
      <Spacing height="24px" />
    </>
  );
};

export default FinderRegisterButton;
