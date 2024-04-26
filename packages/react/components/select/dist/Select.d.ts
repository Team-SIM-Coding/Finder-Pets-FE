import * as React from "react";
declare const _Select: React.ForwardRefExoticComponent<{
    isDisabled?: boolean | undefined;
    isInvalid?: boolean | undefined;
    isRequired?: boolean | undefined;
} & Omit<Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref">, "disabled"> & {
    color?: "blue" | "cyan" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "teal" | "yellow" | "whiteAlpha" | "blackAlpha" | undefined;
    size?: ("lg" | "md" | "sm" | "xs") | undefined;
    variant?: "outline" | "filled" | undefined;
    errorBorderColor?: string | undefined;
    focusBorderColor?: string | undefined;
} & React.RefAttributes<HTMLSelectElement>>;
export { _Select as Select };
