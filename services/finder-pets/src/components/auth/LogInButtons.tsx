"use client";
import * as s from "@/shared/styles/common.css";

import LinkButton from "@/shared/components/LinkButton";
import { Button } from "@design-system/react-components-button";
import FindAndResetButtons from "./FindAndResetButtons";

const LogInButtons = () => {
  return (
    <>
      <FindAndResetButtons />
      <LinkButton href="/register" text="회원가입" className={s.whiteButton} />
      <Button className={s.defaultButton}>로그인</Button>
    </>
  );
};

export default LogInButtons;
