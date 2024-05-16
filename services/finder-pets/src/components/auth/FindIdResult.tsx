"use client";
import * as s from "./AuthStyle.css";
import * as cs from "@/shared/styles/common.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import { useCallback } from "react";
import useAlertContext from "@/hooks/useAlertContext";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

interface Props {
  email: string;
}

const FindIdResult = ({ email }: Props) => {
  const { open, close } = useAlertContext();

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      open({
        width: "300px",
        height: "200px",
        title: "클립보드에 복사",
        main: <AlertMainTextBox text="클립보드에 이메일이 복사되었습니다." />,
        rightButtonStyle: cs.defaultButton,
        onRightButtonClick: () => {
          close();
        },
      });
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
      open({
        width: "300px",
        height: "200px",
        title: "클립보드에 복사",
        main: <AlertMainTextBox text="클립보드 복사가 실패되었습니다." />,
        onRightButtonClick: () => {
          close();
        },
      });
    }
  }, [email, open, close]);

  return (
    <Flex direction="column" align="start">
      <Spacing height="20px" />
      <h2 className={s.subHeader}>회원님의 아이디입니다.</h2>
      <Spacing height="20px" />
      <Flex>
        <span className={s.labelTextStyle}>아이디 : </span>
        <p className={s.foundIdText} onClick={copyToClipboard}>
          {email}
        </p>
      </Flex>
    </Flex>
  );
};

export default FindIdResult;
