import * as s from "./AuthStyle.css";

import { Divider, Flex } from "@design-system/react-components-layout";

import LinkTextButton from "@/shared/c/nav/LinkTextButton";

const FindAndResetButtons = () => {
  return (
    <Flex justify="space-around" align="center" className={s.findAndResetButtonsWrap}>
      <LinkTextButton href="/find-id" text="아이디 찾기" />
      <Divider size={2} orientation="vertical" />
      <LinkTextButton href="/find-password" text="비밀번호 찾기" />
      <Divider size={2} orientation="vertical" />
      <LinkTextButton href="/reset-password" text="비밀번호 재설정" />
    </Flex>
  );
};

export default FindAndResetButtons;
