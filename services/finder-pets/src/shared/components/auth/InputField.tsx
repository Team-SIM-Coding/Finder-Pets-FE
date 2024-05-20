"use client";

import * as s from "./AuthStyle.css";

import { Input } from "@design-system/react-components-input";
import { Flex } from "@design-system/react-components-layout";

import ValidationMessages from "@/shared/components/auth/ValidationMessages";

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
}

const InputField = <T extends FieldValues>({ label, name, type }: Props<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <Flex direction="column" align="start">
      <label htmlFor={name.toString()}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            id={name}
            className={s.inputStyle}
            data-invalid={fieldState.invalid ? "true" : "false"}
            type={type}
            onChange={field.onChange}
            value={type === "number" ? field.value ?? 0 : field.value ?? ""}
          />
        )}
      />
      {errors[name] && (
        <ValidationMessages
          firstMessage={(errors[name]?.message as string) || "오류가 발생했습니다."}
        />
      )}
    </Flex>
  );
};

export default InputField;
