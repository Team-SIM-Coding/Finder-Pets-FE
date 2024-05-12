import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

const EditorSection = ({ title, main, footer }: Props) => {
  return (
    <section className={s.container}>
      <Flex direction="column" align="center">
        <header className={s.headerTitle}>{title}</header>
        <main className={s.mainWrap}>{main}</main>
        <footer className={s.footerWrap}>{footer}</footer>
      </Flex>
    </section>
  );
};

export default EditorSection;
