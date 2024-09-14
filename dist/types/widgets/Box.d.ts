import { CSSProperties, ElementType, ReactNode } from "react";
import { SizeUnit } from "../types";
export type BoxCSSPropertiesBehvaior<T> = {
    default: T;
    onHover?: T;
    onFocus?: T;
    onFocusVisible?: T;
    onActive?: T;
};
export type BoxCSSProperties<T> = {
    [P in keyof T]?: T[P] | BoxCSSPropertiesBehvaior<T[P]>;
};
export interface BoxProperties extends Omit<BoxCSSProperties<CSSProperties>, "style"> {
    id?: string;
    className?: string;
    children?: ReactNode;
    tagName?: ElementType;
    size?: SizeUnit;
    [key: string]: any;
}
export declare const Box: import("react").ForwardRefExoticComponent<Omit<BoxProperties, "ref"> & import("react").RefAttributes<HTMLElement>>;
