import * as React from "react";
import { forwardRef, Ref } from "react";
import { InputProps } from "./types";
import { useInput } from "@design-system/react-hooks-input";

import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  colorVariant,
  errorBorderColorVariant,
  focusBorderColorVariant,
  inputStyle,
} from "./style.css";
import { vars } from "@design-system/themes";

const Input = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  const {
    color = "gray",
    size = "lg",
    variant = "outline",
    errorBorderColor = "#E53E3E",
    focusBorderColor = "#3182CE",
    className,
    style,
    onChange,
    onBlur,
    value,
    ...rest
  } = props;

  const { inputProps } = useInput(rest);

  return (
    <input
      {...inputProps}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={ref}
      className={clsx([
        inputStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
        ...style,
      }}
    />
  );
};

const _Input = forwardRef(Input);

_Input.displayName = "Input";

export { _Input as Input };
