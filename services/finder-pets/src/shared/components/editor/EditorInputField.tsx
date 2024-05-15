"use client";

import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { Input } from "@design-system/react-components-input";

interface Props {
  label: string;
  className: string;
  value?: string;
}

const EditorInputField = ({ label, className, value }: Props) => {
  return (
    <Flex align="center">
      <label className={s.editorInputLabel}>{label}</label>
      <Input className={className} value={value} />
    </Flex>
  );
};

export default EditorInputField;
