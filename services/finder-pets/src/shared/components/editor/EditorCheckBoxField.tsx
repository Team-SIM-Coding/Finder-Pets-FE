"use client";
import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { Input } from "@design-system/react-components-input";
import { FieldValues, useFormContext, Path, Controller } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
}

const EditorCheckBoxField = <T extends FieldValues>({ label, name }: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Flex align="center" className={s.editorCheckBoxWrap}>
      <div className={s.editorCheckBoxLabelWrap}>
        <label className={s.editorInputLabel}>{label}</label>
      </div>
      <Flex align="center">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <>
              <div className={s.editorCheckBoxInputWrap}>
                <label style={{ marginRight: "8px" }} className={s.editorInputLabel}>
                  예
                </label>
                <Input
                  {...field}
                  id={name}
                  type="checkbox"
                  checked={field.value === true}
                  onChange={() => field.onChange(true)}
                />
              </div>
              <div>
                <label style={{ marginRight: "8px" }} className={s.editorInputLabel}>
                  아니오
                </label>
                <Input
                  {...field}
                  id={name}
                  type="checkbox"
                  checked={field.value === false}
                  onChange={() => field.onChange(false)}
                />
              </div>
            </>
          )}
        />
      </Flex>
    </Flex>
  );
};

export default EditorCheckBoxField;
