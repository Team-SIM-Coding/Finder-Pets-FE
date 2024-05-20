"use client";
import * as cs from "@/styles/common.css";

import useAlertContext from "@/hooks/useAlertContext";
import authState from "@/recoil/authAtom";
import Spacing from "@/shared/components/Spacing";
import AlertMainTextBox from "@/shared/components/alert/AlertMainTextBox";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

const ProfileButtons = () => {
  const setAuthStateValue = useSetRecoilState(authState);

  const router = useRouter();
  const { open, close } = useAlertContext();

  const handleLogOut = () => {
    open({
      width: "300px",
      height: "200px",
      title: "로그아웃",
      main: <AlertMainTextBox text="로그아웃 하시겠습니까?" />,
      leftButtonLabel: "취소",
      leftButtonStyle: cs.whiteButton,
      rightButtonStyle: cs.defaultButton,
      onLeftButtonClick: () => {
        close();
      },
      onRightButtonClick: () => {
        close();
        router.push("/");
      },
      onBackDropClick: () => {
        close();
      },
    });
    setAuthStateValue((prev) => ({ ...prev, isLoggedIn: false }));
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Spacing height="12px" />
      <Button className={cs.defaultButton} form="profile-form" type="submit">
        저장
      </Button>
      <Button className={cs.whiteButton} onClick={handleLogOut}>
        로그아웃
      </Button>
      <Button className={cs.whiteButton}>회원탈퇴</Button>
      <Spacing height="24px" />
    </Flex>
  );
};

export default ProfileButtons;
