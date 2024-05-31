import * as s from "./AuthStyle.css";

import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/c/spacing/Spacing";

const ResetPasswordResult = () => {
  return (
    <Flex direction="column" align="start">
      <Spacing margin="20px" />
      <h2 className={s.subHeader}>새로운 비밀번호로 재설정이 완료되었습니다.</h2>
      <Spacing margin="10px" />
      <h2 className={s.subHeader}>다시 로그인을 시도해주세요.</h2>
    </Flex>
  );
};

export default ResetPasswordResult;
