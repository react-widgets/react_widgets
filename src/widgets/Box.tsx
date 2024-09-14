import { CSSProperties, ElementType, forwardRef, FunctionComponent, HTMLProps, ReactNode } from "react";
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

export interface BoxProperties extends BoxCSSProperties<CSSProperties> {
    id?: string;
    className?: string;
    innerHTML?: string;
    children?: ReactNode;
    tagName?: ElementType;
    size?: SizeUnit;

    onClick?: React.MouseEventHandler<HTMLElement>;
    onClickCapture?: React.MouseEventHandler<HTMLElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLElement>;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler<HTMLElement>
    onFocusCapture?: React.FocusEventHandler<HTMLElement>
    onChange?: React.FormEventHandler<HTMLElement>;
    onChangeCapture?: React.FormEventHandler<HTMLElement>;
    onRateChange?: React.ReactEventHandler<HTMLElement>
    onRateChangeCapture?: React.ReactEventHandler<HTMLElement>
    onVolumeChange?: React.ReactEventHandler<HTMLElement>
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement>

    [key: string]: any;
}

export const Box = forwardRef<HTMLElement, BoxProperties>((p, ref) => {
    const style = {...p};
    const props: HTMLProps<HTMLElement> = {
        id: p.id,
        className: p.className,
        children: p.children,
        ref: ref,

        // About HTML syntax string for child element.
        dangerouslySetInnerHTML: p.innerHTML ? {__html: p.innerHTML} : undefined,

        // About event handler for HTML element.
        onClick: p.onClick,
        onClickCapture: p.onClickCapture,
        onDoubleClick: p.onDoubleClick,
        onDoubleClickCapture: p.onDoubleClickCapture,
        onFocus: p.onFocus,
        onFocusCapture: p.onFocusCapture,
        onChange: p.onChange,
        onChangeCapture: p.onChangeCapture,
        onRateChange: p.onRateChange,
        onRateChangeCapture: p.onRateChangeCapture,
        onVolumeChange: p.onVolumeChange,
        onVolumeChangeCapture: p.onVolumeChangeCapture
    };

    if (p.size) {
        console.assert(p.width == null, "The width cannot be defined when defining the size.");
        console.assert(p.height == null, "The height cannot be defined when defining the size.");
        style.width = p.size;
        style.height = p.size;
    }

    return jsx(p.tagName ?? "div", {...props, style: style});
}) as FunctionComponent<BoxProperties>;