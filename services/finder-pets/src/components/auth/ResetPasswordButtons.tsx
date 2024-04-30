"use client";
import LinkButton from "@/shared/components/LinkButton";
import Spacing from "@/shared/components/Spacing";
import * as s from "@/shared/styles/common.css";
import { Button } from "@design-system/react-components-button";

const ResetPasswordButtons = () => {
  return (
    <div>
      <Button className={s.defaultButton}>비밀번호 재설정</Button>
      <LinkButton href="/login" text="로그인" className={s.defaultButton} />
      <LinkButton href="/find-password" text="비밀번호 찾기" className={s.whiteButton} />
      <LinkButton href="/find-id" text="아이디 찾기" className={s.whiteButton} />
      <Spacing height="40px" />
    </div>
  );
};

export default ResetPasswordButtons;
