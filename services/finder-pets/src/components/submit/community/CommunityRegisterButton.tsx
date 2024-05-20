"use client";

import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import Spacing from "@/shared/c/spacing/Spacing";

const CommunityRegisterButton = () => {
  return (
    <>
      <Button className={cs.defaultButton} form="community-register-form" type="submit">
        등록하기
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default CommunityRegisterButton;
