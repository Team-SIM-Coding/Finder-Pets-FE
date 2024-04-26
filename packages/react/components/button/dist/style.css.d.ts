export declare const enableColorVariant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const hoverColorVariant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const activeColorVariant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const buttonStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        xs: {
            fontWeight: string;
            padding: "0 0.5rem";
            gap: "0.5rem";
            height: "1.5rem";
            fontSize: string;
            lineHeight: string;
        };
        sm: {
            fontWeight: string;
            padding: "0 0.75rem";
            gap: "0.5rem ";
            height: "2rem";
            fontSize: string;
            lineHeight: string;
        };
        md: {
            fontWeight: string;
            padding: "0 1rem";
            gap: "0.5rem";
            height: "2.5rem";
            fontSize: string;
            lineHeight: string;
        };
        lg: {
            fontWeight: string;
            padding: "0 1.5rem";
            gap: "0.5rem";
            height: "3rem";
            fontSize: string;
            lineHeight: string;
        };
    };
    variant: {
        solid: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: string;
            "&:hover:not([disabled])": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            "&:active:not([disabled])": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        outline: {
            border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            "&:hover:not([disabled])": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            "&:active:not([disabled])": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        ghost: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            "&:hover:not([disabled])": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            "&:active:not([disabled])": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
    };
}>;
export declare const spanStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        xs: {
            fontWeight: string;
            fontSize: string;
            lineHeight: string;
        };
        sm: {
            fontWeight: string;
            fontSize: string;
            lineHeight: string;
        };
        md: {
            fontWeight: string;
            fontSize: string;
            lineHeight: string;
        };
        lg: {
            fontWeight: string;
            fontSize: string;
            lineHeight: string;
        };
    };
}>;
export declare const spinnerStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        xs: {
            width: string;
            height: string;
            left: `calc(50% - ${string}/2)`;
        };
        sm: {
            width: string;
            height: string;
            left: `calc(50% - ${string}/2)`;
        };
        md: {
            width: string;
            height: string;
            left: `calc(50% - ${string}/2)`;
        };
        lg: {
            width: string;
            height: string;
            left: `calc(50% - ${string}/2)`;
        };
    };
}>;
