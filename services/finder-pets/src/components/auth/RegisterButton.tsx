"use client";
import Spacing from "@/shared/components/Spacing";
import * as s from "@/shared/styles/common.css";
import { Button } from "@design-system/react-components-button";

const TEST_USER = {
  user_id: "1",
  email: "dataliteracy@icloud.com",
  password: "password1234",
  name: "이종현",
  phone: "010-0000-0001",
};

const RegisterButton = () => {
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(TEST_USER),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("회원가입 성공:", data);
      } else {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const error = await response.json();
          console.error("회원가입 실패:", error.message);
        } else {
          const errorText = await response.text();
          console.error("회원가입 실패 - HTML 오류 페이지:", errorText);
        }
      }
    } catch (networkError) {
      console.error("회원가입 실패 - 네트워크 오류:", networkError);
    }
  };

  return (
    <>
      <Button className={s.defaultButton} onClick={handleSubmit}>
        회원가입
      </Button>
      <Spacing height="40px" />
    </>
  );
};

export default RegisterButton;
