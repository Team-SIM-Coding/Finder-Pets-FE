"use client";

import * as s from "@/shared/styles/common.css";

import LinkButton from "@/shared/components/LinkButton";
import { Button } from "@design-system/react-components-button";
import Spacing from "@/shared/components/Spacing";

const TEST_USER = {
  email: "dataliteracy@icloud.com",
  name: "이종현",
  phone: "010-0000-0001",
};

const FindPasswordButtons = () => {
  const handleFindUserPassword = async () => {
    const response = await fetch("/api/find-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_USER),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("비밀번호 찾기 성공:", data.message);
    } else {
      const error = await response.json();
      console.error("비밀번호 찾기 실패:", error.message);
    }
  };

  return (
    <div>
      <Button className={s.defaultButton} onClick={handleFindUserPassword}>
        비밀번호 찾기
      </Button>
      <LinkButton href="/login" text="로그인" className={s.defaultButton} />
      <LinkButton href="/find-id" text="아이디 찾기" className={s.whiteButton} />
      <LinkButton href="/reset-password" text="비밀번호 재설정" className={s.whiteButton} />
      <Spacing height="40px" />
    </div>
  );
};

export default FindPasswordButtons;
