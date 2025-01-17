import { CSSProperties, FunctionComponent, ReactNode, Ref } from "react";
import { DeepOmit, SizeUnit } from "../types";
export type ColumnAlignment = "bottomCenter" | "bottomLeft" | "bottomRight" | "center" | "centerLeft" | "centerRight" | "topCenter" | "topLeft" | "topRight" | "spaceBetweenLeft" | "spaceBetweenCenter" | "spaceBetweenRight" | "spaceAroundLeft" | "spaceAroundCenter" | "spaceAroundRight" | "spaceEvenlyLeft" | "spaceEvenlyCenter" | "spaceEvenlyRight";
export interface ColumnProperties extends DeepOmit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "alignItems" | "alignContent" | "justifyContent"> {
    ref?: Ref<HTMLElement>;
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
export declare const Column: FunctionComponent<ColumnProperties>;
