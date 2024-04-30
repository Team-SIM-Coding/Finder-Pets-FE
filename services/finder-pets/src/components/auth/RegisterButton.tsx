"use client";
import * as s from "./RegisterStyle.css";

import { Button } from "@design-system/react-components-button";

const RegisterButton = () => {
  return <Button className={s.registerButton}>회원가입</Button>;
};

export default RegisterButton;
