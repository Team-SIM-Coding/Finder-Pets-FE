"use client";

import * as s from "@/styles/common.css";

import { Button } from "@design-system/react-components-button";

import LinkButton from "@/shared/c/nav/LinkButton";
import Spacing from "@/shared/c/spacing/Spacing";

import authState from "@/recoil/authAtom";
import { useRecoilValue } from "recoil";

const FindPasswordButtons = () => {
  const { isCompletedFindPassword } = useRecoilValue(authState);

  return (
    <div>
      {!isCompletedFindPassword && (
        <Button className={s.defaultButton} form="find-password-form" type="submit">
          비밀번호 찾기
        </Button>
      )}
      {isCompletedFindPassword && (
        <LinkButton href="/register" text="회원가입" className={s.defaultButton} />
      )}
      <LinkButton href="/login" text="로그인" className={s.defaultButton} />
      <LinkButton href="/find-id" text="아이디 찾기" className={s.whiteButton} />
      <LinkButton href="/reset-password" text="비밀번호 재설정" className={s.whiteButton} />
      <Spacing margin="40px" />
    </div>
  );
};

export default FindPasswordButtons;
