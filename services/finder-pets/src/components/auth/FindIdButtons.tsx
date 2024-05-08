"use client";

import * as s from "@/shared/styles/common.css";

import LinkButton from "@/shared/components/LinkButton";
import { Button } from "@design-system/react-components-button";
import Spacing from "@/shared/components/Spacing";

const TEST_USER = {
  name: "이종현",
  phone: "010-0000-0001",
};

const FindIdButtons = () => {
  const handleFindId = async () => {
    const response = await fetch("/api/findId", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_USER),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("아이디 찾기 성공:", data.email);
    } else {
      const error = await response.json();
      console.error("아이디 찾기 실패:", error.message);
    }
  };

  return (
    <div>
      <Button className={s.defaultButton} onClick={handleFindId}>
        아이디 찾기
      </Button>
      <LinkButton href="/login" text="로그인" className={s.defaultButton} />
      <LinkButton href="/find-password" text="비밀번호 찾기" className={s.whiteButton} />
      <LinkButton href="/reset-password" text="비밀번호 재설정" className={s.whiteButton} />
      <Spacing height="40px" />
    </div>
  );
};

export default FindIdButtons;
