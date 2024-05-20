"use client";

import * as cs from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import LinkButton from "@/shared/components/LinkButton";
import Spacing from "@/shared/components/Spacing";

import authState from "@/recoil/authAtom";
import { useRecoilValue } from "recoil";

const ResetPasswordButtons = () => {
  const { isCompletedResetPassword } = useRecoilValue(authState);

  return (
    <div>
      {!isCompletedResetPassword && (
        <Button className={cs.defaultButton} form="reset-password-form" type="submit">
          비밀번호 재설정
        </Button>
      )}
      {isCompletedResetPassword && (
        <LinkButton href="/register" text="회원가입" className={cs.defaultButton} />
      )}
      <LinkButton href="/login" text="로그인" className={cs.defaultButton} />
      <LinkButton href="/find-password" text="비밀번호 찾기" className={cs.whiteButton} />
      <LinkButton href="/find-id" text="아이디 찾기" className={cs.whiteButton} />
      <Spacing height="40px" />
    </div>
  );
};

export default ResetPasswordButtons;
