"use client";
import * as s from "@/shared/styles/common.css";

import LinkButton from "@/shared/components/LinkButton";
import { Button } from "@design-system/react-components-button";
import FindAndResetButtons from "./FindAndResetButtons";
import Spacing from "@/shared/components/Spacing";

const TEST_USER = {
  email: "dataliteracy@icloud.com",
  password: "password1234",
};

const LogInButtons = () => {
  const handleLogIn = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_USER),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("로그인 성공:", data);
    } else {
      const error = await response.json();
      console.error("로그인 실패:", error.message);
    }
  };
  return (
    <>
      <FindAndResetButtons />
      <LinkButton href="/register" text="회원가입" className={s.whiteButton} />
      <Button className={s.defaultButton} onClick={handleLogIn}>
        로그인
      </Button>
      <Spacing height="40px" />
    </>
  );
};

export default LogInButtons;
