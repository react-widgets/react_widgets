import { CSSProperties, ReactNode } from "react";
import { DeepOmit, SizeUnit } from "../types";
export interface GridProperties extends DeepOmit<CSSProperties, "display" | "gridTemplateColumns" | "padding" | "margin"> {
    children?: ReactNode;
    rowCount: number;
    gap?: SizeUnit;
    verticalGap?: string;
    horizontalGap?: string;
    padding?: string;
    margin?: string;
    [key: string]: any;
}
export declare function Grid(p: GridProperties): import("react/jsx-runtime").JSX.Element;
