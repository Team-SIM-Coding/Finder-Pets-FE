"use client";
import * as s from "@/shared/styles/common.css";

import LinkButton from "@/shared/components/LinkButton";
import { Button } from "@design-system/react-components-button";
import FindAndResetButtons from "./FindAndResetButtons";
import Spacing from "@/shared/components/Spacing";

const LogInButtons = () => {
  return (
    <>
      <Spacing height="40px" />
      <FindAndResetButtons />
      <LinkButton href="/register" text="회원가입" className={s.whiteButton} />
      <Button className={s.defaultButton}>로그인</Button>
    </>
  );
};

export default LogInButtons;
