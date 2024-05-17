"use client";

import * as s from "./EditorStyle.css";

import { Flex } from "@design-system/react-components-layout";
import { Input } from "@design-system/react-components-input";
import { FieldValues, useFormContext, Path, Controller } from "react-hook-form";
import ValidationMessages from "../auth/ValidationMessages";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  className: string;
  type?: string;
  value?: string | number;
}

const EditorInputField = <T extends FieldValues>({
  label,
  name,
  value,
  type,
  className,
}: Props<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <>
      <Flex align="center">
        <label htmlFor={name.toString()} className={s.editorInputLabel}>
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input
              {...field}
              id={name}
              className={className}
              type={type}
              onChange={field.onChange}
              value={field.value || value}
            />
          )}
        />
      </Flex>
      {errors[name] && (
        <ValidationMessages
          firstMessage={(errors[name]?.message as string) || "오류가 발생했습니다."}
        />
      )}
    </>
  );
};

export default EditorInputField;
