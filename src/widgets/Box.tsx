import { CSSProperties, DetailedHTMLProps, ElementType, forwardRef, HTMLProps, ReactNode, Ref } from "react";
import { ReactWidgetsBinding } from "../modules/react_widgets_binding";
import { jsx } from "react/jsx-runtime";
import { SizeUnit } from "../types";

export type BoxCSSPropertiesBehvaior<T> = {
    default: T;
    onHover?: T;
    onFocus?: T;
    onFocusVisible?: T;
    onActive?: T;
}

export type BoxCSSProperties<T> = {
    [P in keyof T]?: T[P] | BoxCSSPropertiesBehvaior<T[P]>;
}

export interface BoxProperties extends Omit<BoxCSSProperties<CSSProperties>, "style"> {
    id?: string;
    className?: string;
    children?: ReactNode;
    tagName?: ElementType;
    size?: SizeUnit;

    [key: string]: any;
}

export const Box = forwardRef<HTMLElement, BoxProperties>((p, ref) => {
    const style = {...p.style};
    const props = {
        id: p.id,
        className: p.className,
        children: p.children,
        ref: ref, // forward the ref properly
    };

    if (p.size) {
        console.assert(p.width == null, "The width cannot be defined when defining the size.");
        console.assert(p.height == null, "The height cannot be defined when defining the size.");
        style.width = p.size;
        style.height = p.size;
    }

    return jsx(p.tagName ?? "div", {...props, style: style});
});