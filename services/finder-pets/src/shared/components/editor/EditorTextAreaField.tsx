"use client";

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import * as s from "./EditorStyle.css";
import { Flex } from "@design-system/react-components-layout";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  className: string;
  value?: string;
}

const EditorTextAreaField = <T extends FieldValues>({
  label,
  value,
  name,
  className,
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Flex>
      <label htmlFor={name.toString()} className={s.editorTextareaLabel}>
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            id={name}
            className={className}
            onChange={field.onChange}
            value={field.value || value}
          />
        )}
      />
    </Flex>
  );
};

export default EditorTextAreaField;
