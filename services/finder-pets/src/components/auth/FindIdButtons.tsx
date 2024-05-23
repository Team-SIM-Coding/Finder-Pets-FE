"use client";

import * as s from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import LinkButton from "@/shared/c/nav/LinkButton";
import Spacing from "@/shared/c/spacing/Spacing";

const FindIdButtons = () => {
  return (
    <div>
      <Button className={s.defaultButton} form="find-id-form" type="submit">
        아이디 찾기
      </Button>
      <LinkButton href="/login" text="로그인" className={s.defaultButton} />
      <LinkButton href="/find-password" text="비밀번호 찾기" className={s.whiteButton} />
      <LinkButton href="/reset-password" text="비밀번호 재설정" className={s.whiteButton} />
      <Spacing margin="40px" />
    </div>
  );
};

export default FindIdButtons;
