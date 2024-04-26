import { Ref, forwardRef } from "react";
import { ButtonProps } from "./types";
import { vars } from "@design-system/themes";
import { useButton } from "@design-system/react-hooks-button";
import { clsx } from "clsx";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { buttonProps } = useButton(props);
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftIcon,
    rightIcon,
    isLoading,
    children,
    style,
  } = props;

  const endableColor = vars.colors.$scale[color][500];
  const hoverColor =
    variant === "solid" ? vars.colors.$scale[color][600] : vars.colors.$scale[color][50];
  const activeColor =
    variant === "solid" ? vars.colors.$scale[color][700] : vars.colors.$scale[color][100];

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([buttonStyle({ size, variant })])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: endableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
};

const _Button = forwardRef(Button);
export { _Button as Button };
