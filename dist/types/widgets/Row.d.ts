import { CSSProperties, FunctionComponent, ReactNode, Ref } from "react";
import { DeepOmit, SizeUnit } from "../types";
export type RowAlignment = "bottomCenter" | "bottomLeft" | "bottomRight" | "bottomSpaceBetween" | "bottomSpaceAround" | "bottomSpaceEvenly" | "center" | "centerLeft" | "centerRight" | "centerSpaceBetween" | "centerSpaceAround" | "centerSpaceEvenly" | "topCenter" | "topLeft" | "topRight" | "topSpaceBetween" | "topSpaceAround" | "topSpaceEvenly";
export interface RowProperties extends DeepOmit<CSSProperties, "display" | "flexDirection" | "flexWrap" | "alignItems" | "alignContent" | "justifyContent"> {
    ref?: Ref<HTMLElement>;
    className?: string;
    children?: ReactNode;
    paddingAndGap?: SizeUnit;
    reverse?: any;
    wrap?: any;
    size?: SizeUnit;
    align?: RowAlignment;
    [key: string]: any;
}
export declare const Row: FunctionComponent<RowProperties>;
