import * as React from "react";
declare const _Input: React.ForwardRefExoticComponent<{
    isDisabled?: boolean | undefined;
    isReadOnly?: boolean | undefined;
    isRequired?: boolean | undefined;
    isInvalid?: boolean | undefined;
} & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "disabled" | "readOnly"> & {
    color?: "blue" | "cyan" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "teal" | "yellow" | "whiteAlpha" | "blackAlpha" | undefined;
    size?: ("lg" | "md" | "sm" | "xs") | undefined;
    variant?: "outline" | "filled" | undefined;
    errorBorderColor?: string | undefined;
    focusBorderColor?: string | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export { _Input as Input };
