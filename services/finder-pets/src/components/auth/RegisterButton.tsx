"use client";

import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import LinkButton from "@/shared/c/nav/LinkButton";
import Spacing from "@/shared/c/spacing/Spacing";

const RegisterButton = () => {
  return (
    <>
      <Button className={cs.defaultButton} form={"register-form"} type="submit">
        회원가입
      </Button>
      <LinkButton href="/login" text="로그인" className={cs.whiteButton} />
      <Spacing margin="40px" />
    </>
  );
};

export default RegisterButton;
