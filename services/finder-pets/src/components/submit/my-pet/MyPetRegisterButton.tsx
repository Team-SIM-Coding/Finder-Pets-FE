"use client";

import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import Spacing from "@/shared/c/spacing/Spacing";

const MyPetRegisterButton = () => {
  return (
    <>
      <Button className={cs.defaultButton} form="my-pet-register-form" type="submit">
        등록하기
      </Button>
      <Spacing margin="24px" />
    </>
  );
};

export default MyPetRegisterButton;
