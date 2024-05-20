"use client";

import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { Input } from "@design-system/react-components-input";

import { FieldValues, useFormContext, Path, Controller, PathValue } from "react-hook-form";
import { useEffect } from "react";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  defaultValue?: boolean;
}

const EditorCheckBoxField = <T extends FieldValues>({ label, name, defaultValue }: Props<T>) => {
  const { control, setValue } = useFormContext<T>();

  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(name, defaultValue as PathValue<T, Path<T>>);
    }
  }, [defaultValue, name, setValue]);

  const handleChange = (value: boolean) => {
    setValue(name, value as PathValue<T, Path<T>>);
  };

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
                  id={`${name}-yes`}
                  type="checkbox"
                  checked={field.value === true}
                  onChange={() => handleChange(true)}
                />
              </div>
              <div>
                <label style={{ marginRight: "8px" }} className={s.editorInputLabel}>
                  아니오
                </label>
                <Input
                  {...field}
                  id={`${name}-no`}
                  type="checkbox"
                  checked={field.value === false}
                  onChange={() => handleChange(false)}
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
