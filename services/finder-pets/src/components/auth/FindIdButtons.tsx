"use client";

import * as s from "@/shared/styles/common.css";

import LinkButton from "@/shared/components/LinkButton";
import { Button } from "@design-system/react-components-button";
import Spacing from "@/shared/components/Spacing";

const FindIdButtons = () => {
  return (
    <div>
      <Button className={s.defaultButton}>아이디 찾기</Button>
      <LinkButton href="/login" text="로그인" className={s.defaultButton} />
      <LinkButton href="/find-password" text="비밀번호 찾기" className={s.whiteButton} />
      <LinkButton href="/reset-password" text="비밀번호 재설정" className={s.whiteButton} />
      <Spacing height="40px" />
    </div>
  );
};

export default FindIdButtons;
