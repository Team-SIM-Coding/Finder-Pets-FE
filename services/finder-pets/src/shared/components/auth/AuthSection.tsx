import * as s from "./AuthStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

const AuthSection = ({ header, main, footer }: Props) => {
  return (
    <section className={s.container}>
      <Flex align={"center"} direction={"column"}>
        <header>{header}</header>
        <main className={s.mainWrap}>{main}</main>
        <footer className={s.footerWrap}>{footer}</footer>
      </Flex>
    </section>
  );
};

export default AuthSection;
