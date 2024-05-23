"use client";

import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import Spacing from "@/shared/c/spacing/Spacing";

const FinderUpdateButton = () => {
  return (
    <>
      <Button className={cs.defaultButton} form="finder-update-form" type="submit">
        수정하기
      </Button>
      <Spacing margin="24px" />
    </>
  );
};

export default FinderUpdateButton;
