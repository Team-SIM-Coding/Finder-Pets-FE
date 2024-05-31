"use client";
import * as cs from "@/styles/common.css";
import * as s from "./AuthStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

import useAlertContext from "@/hooks/useAlertContext";

import { useCallback } from "react";

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
      <Spacing margin="20px" />
      <h2 className={s.subHeader}>회원님의 아이디입니다.</h2>
      <Spacing margin="20px" />
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
