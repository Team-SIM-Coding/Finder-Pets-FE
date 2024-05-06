"use client";
import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { Input } from "@design-system/react-components-input";

interface Props {
  label: string;
}

const EditorCheckBoxField = ({ label }: Props) => {
  return (
    <Flex align="center" className={s.editorCheckBoxWrap}>
      <div className={s.editorCheckBoxLabelWrap}>
        <label className={s.editorInputLabel}>{label}</label>
      </div>
      <Flex align="center">
        <div className={s.editorCheckBoxInputWrap}>
          <label style={{ marginRight: "8px" }} className={s.editorInputLabel}>
            예
          </label>
          <Input type="checkbox" />
        </div>
        <div>
          <label style={{ marginRight: "8px" }} className={s.editorInputLabel}>
            아니오
          </label>
          <Input type="checkbox" />
        </div>
      </Flex>
    </Flex>
  );
};

export default EditorCheckBoxField;
