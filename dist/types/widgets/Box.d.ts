import { CSSProperties, ReactNode, Ref } from "react";
import { SizeUnit } from "../types";
export interface BoxProperties extends CSSProperties, JSX.IntrinsicAttributes {
    refer?: Ref<HTMLDivElement>;
    className?: string;
    children?: ReactNode;
    focusable?: boolean;
    size?: SizeUnit;
    [key: string]: any;
}
export declare function Box(p: BoxProperties): import("react/jsx-runtime").JSX.Element;
