import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";

import { ReactNode } from "react";
import { FieldValues, Path } from "react-hook-form";
import SelectTab from "../filter/SelectTab";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  children: ReactNode;
  className?: string;
}

const EditorSelectTab = <T extends FieldValues>({ label, name, children, className }: Props<T>) => {
  return (
    <Flex align="center">
      <label htmlFor={name} className={s.labelStyle}>
        {label}
      </label>
      <SelectTab<T> name={name} className={className}>
        {children}
      </SelectTab>
    </Flex>
  );
};

export default EditorSelectTab;
