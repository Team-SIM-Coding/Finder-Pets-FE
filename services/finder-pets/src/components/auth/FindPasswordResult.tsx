import * as s from "./AuthStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";

const FindPasswordResult = () => {
  return (
    <Flex direction="column" align="start">
      <Spacing margin="20px" />
      <h2 className={s.subHeader}>고객님의 이메일로 비밀번호를 전송했습니다.</h2>
      <Spacing margin="10px" />
      <h2 className={s.subHeader}>이메일을 확인해주세요.</h2>
    </Flex>
  );
};

export default FindPasswordResult;
