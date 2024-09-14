import { CSSProperties, ElementType, FunctionComponent, ReactNode } from "react";
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
export interface BoxProperties extends BoxCSSProperties<CSSProperties> {
    id?: string;
    className?: string;
    children?: ReactNode;
    tagName?: ElementType;
    size?: SizeUnit;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onClickCapture?: React.MouseEventHandler<HTMLElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLElement>;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onFocusCapture?: React.FocusEventHandler<HTMLElement>;
    onChange?: React.FormEventHandler<HTMLElement>;
    onChangeCapture?: React.FormEventHandler<HTMLElement>;
    onRateChange?: React.ReactEventHandler<HTMLElement>;
    onRateChangeCapture?: React.ReactEventHandler<HTMLElement>;
    onVolumeChange?: React.ReactEventHandler<HTMLElement>;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement>;
    [key: string]: any;
}
export declare const Box: FunctionComponent<BoxProperties>;
