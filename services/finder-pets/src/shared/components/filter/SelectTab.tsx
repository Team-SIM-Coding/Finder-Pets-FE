import * as s from "./FilterStyle.css";

import { Select } from "@design-system/react-components-select";
import { ReactNode } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

interface Props<T extends FieldValues> {
  children: ReactNode;
  className?: string;
  name: Path<T>;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectTab = <T extends FieldValues>({ children, name, className, onChange }: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          id={name}
          className={className || s.selectStyle}
          onChange={(e) => {
            field.onChange(e);
            onChange && onChange(e);
          }}
        >
          {children}
        </Select>
      )}
    />
  );
};

export default SelectTab;
