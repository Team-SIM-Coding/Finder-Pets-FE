"use client";

import * as s from "@/shared/styles/common.css";

import LinkButton from "@/shared/components/LinkButton";
import { Button } from "@design-system/react-components-button";
import Spacing from "@/shared/components/Spacing";
import { useRecoilValue } from "recoil";
import authState from "@/recoil/authAtom";

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
      <Spacing height="40px" />
    </div>
  );
};

export default FindPasswordButtons;
