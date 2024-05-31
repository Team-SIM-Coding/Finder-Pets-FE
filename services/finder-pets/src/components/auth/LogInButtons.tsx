"use client";
import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import LinkButton from "@/shared/c/nav/LinkButton";
import Spacing from "@/shared/c/spacing/Spacing";
import FindAndResetButtons from "@/components/auth/FindAndResetButtons";

const LogInButtons = () => {
  return (
    <>
      <FindAndResetButtons />
      <LinkButton href="/register" text="회원가입" className={cs.whiteButton} />
      <Button className={cs.defaultButton} form="login-form" type="submit">
        로그인
      </Button>
      <Spacing margin="40px" />
    </>
  );
};

export default LogInButtons;
