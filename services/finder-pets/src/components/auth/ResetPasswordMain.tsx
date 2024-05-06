"use client";

import Spacing from "@/shared/components/Spacing";
import { useState } from "react";
import ResetPasswordResult from "./ResetPasswordResult";
import InputField from "@/shared/components/auth/InputField";

const ResetPasswordMain = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);

  return (
    <>
      <Spacing height="40px" />
      {!isResetPassword && (
        <>
          <InputField label="아이디" />
          <InputField label="기존 비밀번호" />
          <InputField label="새로운 비밀번호" />
          <InputField
            label="비밀번호 확인"
            validationMessages={["비밀번호가 일치하지 않습니다."]}
          />
        </>
      )}
      {isResetPassword && <ResetPasswordResult />}
    </>
  );
};

export default ResetPasswordMain;
