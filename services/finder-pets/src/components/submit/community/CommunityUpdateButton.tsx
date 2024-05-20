"use client";

import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import Spacing from "@/shared/c/spacing/Spacing";

const CommunityUpdateButton = () => {
  return (
    <>
      <Button className={cs.defaultButton} form="community-update-form" type="submit">
        수정하기
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default CommunityUpdateButton;
