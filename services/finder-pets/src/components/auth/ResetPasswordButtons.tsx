"use client";
import LinkButton from "@/shared/components/LinkButton";
import Spacing from "@/shared/components/Spacing";
import * as s from "@/shared/styles/common.css";
import { Button } from "@design-system/react-components-button";

const TEST_USER = {
  email: "dataliteracy@icloud.com",
  password: "password1234",
  newPassword: "password5678",
};

const ResetPasswordButtons = () => {
  const handleResetPassword = async () => {
    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_USER),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("비밀번호 재설정 성공:", data.message);
    } else {
      const error = await response.json();
      console.error("비밀번호 재설정 실패:", error.message);
    }
  };
  return (
    <div>
      <Button className={s.defaultButton} onClick={handleResetPassword}>
        비밀번호 재설정
      </Button>
      <LinkButton href="/login" text="로그인" className={s.defaultButton} />
      <LinkButton href="/find-password" text="비밀번호 찾기" className={s.whiteButton} />
      <LinkButton href="/find-id" text="아이디 찾기" className={s.whiteButton} />
      <Spacing height="40px" />
    </div>
  );
};

export default ResetPasswordButtons;
