"use client";

import Spacing from "@/shared/components/Spacing";
import InputField from "@/shared/components/auth/InputField";
import FindIdResult from "./FindIdResult";

import { useState } from "react";

const FindIdMain = () => {
  const [isFoundId, setIsFoundId] = useState(true);

  return (
    <>
      <Spacing height="40px" />
      {!isFoundId && (
        <>
          <InputField label="이름" />
          <InputField label="휴대폰 번호" />
        </>
      )}
      {isFoundId && <FindIdResult />}
    </>
  );
};

export default FindIdMain;
