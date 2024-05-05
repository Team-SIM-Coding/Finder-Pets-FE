import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { ReactNode } from "react";
import SelectTab from "../filter/SelectTab";

interface Props {
  label: string;
  children: ReactNode;
  className?: string;
}

const EditorSelectTab = ({ label, children, className }: Props) => {
  return (
    <Flex align="center">
      <label className={s.labelStyle}>{label}</label>
      <SelectTab className={className}>{children}</SelectTab>
    </Flex>
  );
};

export default EditorSelectTab;
