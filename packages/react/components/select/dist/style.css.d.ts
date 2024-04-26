export declare const errorBorderColorVariant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const focusBorderColorVariant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const colorVariant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const selectStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        lg: {
            borderRadius: string;
            padding: "0 1rem";
            height: "3rem";
            fontSize: string;
        };
        md: {
            borderRadius: string;
            padding: "0 1rem";
            height: "2.5rem";
            fontSize: string;
        };
        sm: {
            borderRadius: string;
            padding: "0 0.75rem";
            height: "2rem";
            fontSize: string;
        };
        xs: {
            borderRadius: string;
            padding: "0 0.5rem";
            height: "1.5rem";
            fontSize: string;
        };
    };
    variant: {
        outline: {
            borderColor: string;
            backgroundColor: "transparent";
        };
        filled: {
            borderColor: "transparent";
            backgroundColor: string;
        };
    };
}>;
