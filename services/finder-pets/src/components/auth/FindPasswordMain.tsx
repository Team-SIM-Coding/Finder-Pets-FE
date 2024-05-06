"use client";

import Spacing from "@/shared/components/Spacing";
import InputField from "@/shared/components/auth/InputField";
import { useState } from "react";
import FindPasswordResult from "./FindPasswordResult";

const FindPasswordMain = () => {
  const [isFoundPassword, setIsFoundPassword] = useState(false);

  return (
    <>
      <Spacing height="40px" />
      {!isFoundPassword && (
        <>
          <InputField label="아이디" />
          <InputField label="이름" />
          <InputField label="휴대폰 번호" />
        </>
      )}
      {isFoundPassword && <FindPasswordResult />}
    </>
  );
};

export default FindPasswordMain;
