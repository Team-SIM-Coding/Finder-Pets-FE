import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import * as s from "./AuthStyle.css";

const FindPasswordResult = () => {
  return (
    <Flex direction="column" align="start">
      <Spacing height="20px" />
      <h2 className={s.subHeader}>고객님의 이메일로 비밀번호를 전송했습니다.</h2>
      <Spacing height="10px" />
      <h2 className={s.subHeader}>이메일을 확인해주세요.</h2>
    </Flex>
  );
};

export default FindPasswordResult;
