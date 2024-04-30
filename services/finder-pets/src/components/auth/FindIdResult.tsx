import { Flex } from "@design-system/react-components-layout";

import Spacing from "@/shared/components/Spacing";
import * as s from "./AuthStyle.css";

const FindIdResult = () => {
  return (
    <Flex direction="column" align="start">
      <Spacing height="20px" />
      <h2 className={s.subHeader}>회원님의 아이디입니다.</h2>
      <Spacing height="20px" />
      <Flex>
        <span className={s.labelTextStyle}>아이디 : </span>
        <p className={s.foundIdText}>dataliteracy@icloud.com</p>
      </Flex>
    </Flex>
  );
};

export default FindIdResult;
