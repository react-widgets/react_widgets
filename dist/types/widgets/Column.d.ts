import { CSSProperties, ReactNode } from "react";
import { DeepOmit, SizeUnit } from "../types";
export type ColumnAlignment = "bottomCenter" | "bottomLeft" | "bottomRight" | "center" | "centerLeft" | "centerRight" | "topCenter" | "topLeft" | "topRight" | "spaceBetweenLeft" | "spaceBetweenCenter" | "spaceBetweenRight" | "spaceAroundLeft" | "spaceAroundCenter" | "spaceAroundRight" | "spaceEvenlyLeft" | "spaceEvenlyCenter" | "spaceEvenlyRight";
export interface ColumnProperties extends DeepOmit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "gap" | "alignItems" | "alignContent" | "justifyContent"> {
    className?: string;
    children?: ReactNode;
    paddingAndGap?: SizeUnit;
    reverse?: any;
    wrap?: any;
    size?: SizeUnit;
    scrollable?: any;
    align?: ColumnAlignment;
    [key: string]: any;
}
export declare function Column(p: ColumnProperties): import("react/jsx-runtime").JSX.Element;
