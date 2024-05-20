"use client";

import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import Spacing from "@/shared/c/spacing/Spacing";

const MyPetProfileButton = () => {
  return (
    <>
      <Button className={cs.defaultButton} form="my-pet-form" type="submit">
        저장
      </Button>
      <Spacing height="24px" />
    </>
  );
};

export default MyPetProfileButton;
