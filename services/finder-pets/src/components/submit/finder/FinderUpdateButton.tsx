"use client";
import * as cs from "@/shared/styles/common.css";

import Spacing from "@/shared/components/Spacing";

import { Button } from "@design-system/react-components-button";

const FinderUpdateButton = () => {
  return (
    <>
      <Button className={cs.defaultButton} form="finder-update-form" type="submit">
        수정하기
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default FinderUpdateButton;
