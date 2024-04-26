/// <reference types="react" />
declare const _Button: import("react").ForwardRefExoticComponent<{
    color?: "blue" | "cyan" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "teal" | "yellow" | "whiteAlpha" | "blackAlpha" | undefined;
    isDisabled?: boolean | undefined;
    isLoading?: boolean | undefined;
    leftIcon?: import("react").ReactNode;
    rightIcon?: import("react").ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    variant?: "outline" | "solid" | "ghost" | undefined;
} & import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
export { _Button as Button };
