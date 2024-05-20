"use client";
import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import LinkButton from "@/shared/components/LinkButton";
import Spacing from "@/shared/components/Spacing";
import FindAndResetButtons from "@/components/auth/FindAndResetButtons";

const LogInButtons = () => {
  return (
    <>
      <FindAndResetButtons />
      <LinkButton href="/register" text="회원가입" className={cs.whiteButton} />
      <Button className={cs.defaultButton} form="login-form" type="submit">
        로그인
      </Button>
      <Spacing height="40px" />
    </>
  );
};

export default LogInButtons;
