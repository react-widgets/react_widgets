import { CSSProperties, ReactNode } from "react";
import { DeepOmit, SizeUnit } from "../types";
export type RowAlignment = "bottomCenter" | "bottomLeft" | "bottomRight" | "bottomSpaceBetween" | "bottomSpaceAround" | "bottomSpaceEvenly" | "center" | "centerLeft" | "centerRight" | "centerSpaceBetween" | "centerSpaceAround" | "centerSpaceEvenly" | "topCenter" | "topLeft" | "topRight" | "topSpaceBetween" | "topSpaceAround" | "topSpaceEvenly";
export interface RowProperties extends DeepOmit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "gap" | "alignItems" | "alignContent" | "justifyContent"> {
    className?: string;
    children?: ReactNode;
    gap?: SizeUnit;
    reverse?: any;
    wrap?: any;
    size?: SizeUnit;
    scrollable?: any;
    align?: RowAlignment;
    [key: string]: any;
}
export declare function Row(p: RowProperties): import("react/jsx-runtime").JSX.Element;
