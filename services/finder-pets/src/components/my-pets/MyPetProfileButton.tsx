"use client";
import Spacing from "@/shared/components/Spacing";
import * as cs from "@/shared/styles/common.css";

import { Button } from "@design-system/react-components-button";

const MyPetProfileButton = () => {
  return (
    <>
      <Button className={cs.defaultButton}>저장</Button>
      <Spacing height="24px" />
    </>
  );
};

export default MyPetProfileButton;
