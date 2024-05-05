import * as s from "./EditorStyle.css";
import { Flex } from "@design-system/react-components-layout";

interface Props {
  label: string;
  className: string;
}

const EditorTextAreaField = ({ label, className }: Props) => {
  return (
    <Flex>
      <label className={s.editorTextareaLabel}>{label}</label>
      <textarea className={className} />
    </Flex>
  );
};

export default EditorTextAreaField;
