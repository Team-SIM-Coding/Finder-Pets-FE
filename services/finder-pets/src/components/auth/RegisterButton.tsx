"use client";
import Spacing from "@/shared/components/Spacing";
import * as s from "@/shared/styles/common.css";
import { Button } from "@design-system/react-components-button";

const RegisterButton = () => {
  return (
    <>
      <Button className={s.defaultButton} form={"register-form"} type="submit">
        회원가입
      </Button>
      <Spacing height="40px" />
    </>
  );
};

export default RegisterButton;
