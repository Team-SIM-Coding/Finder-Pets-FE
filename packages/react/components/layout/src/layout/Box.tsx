import * as React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { forwardRef, Ref } from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@design-system/themes";

const Box = (props: BoxProps, ref: Ref<HTMLElement>) => {
  const { as = "div", color, background, children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))),
        props.children,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Box = forwardRef(Box);
export { _Box as Box };
