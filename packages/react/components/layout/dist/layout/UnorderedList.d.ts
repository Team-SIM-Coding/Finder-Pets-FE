/// <reference types="react" />
declare const _UnorderedList: import("react").ForwardRefExoticComponent<Omit<import("./types").ListProps, "variant"> & {
    listStyleType?: import("csstype").Property.ListStyleType | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | (import("csstype").Property.ListStyleType | (`var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`) | undefined)[] | undefined;
} & import("react").RefAttributes<HTMLOListElement>>;
export { _UnorderedList as UnorderedList };
