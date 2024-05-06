"use client";
import Spacing from "@/shared/components/Spacing";
import * as cs from "@/shared/styles/common.css";

import { Button } from "@design-system/react-components-button";
import { Flex } from "@design-system/react-components-layout";

const ProfileButtons = () => {
  return (
    <Flex direction="column" justify="center" align="center">
      <Spacing height="12px" />
      <Button className={cs.defaultButton}>저장</Button>
      <Button className={cs.whiteButton}>로그아웃</Button>
      <Button className={cs.whiteButton}>회원탈퇴</Button>
      <Spacing height="24px" />
    </Flex>
  );
};

export default ProfileButtons;
