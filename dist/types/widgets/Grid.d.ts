import { CSSProperties, FunctionComponent, ReactNode, Ref } from "react";
import { DeepOmit, SizeUnit } from "../types";
export interface GridProperties extends DeepOmit<CSSProperties, "display" | "gridTemplateColumns" | "padding" | "margin"> {
    ref?: Ref<HTMLElement>;
    className?: string;
    children?: ReactNode;
    rowCount: number;
    gap?: SizeUnit;
    verticalGap?: string;
    horizontalGap?: string;
    padding?: string;
    margin?: string;
    [key: string]: any;
}
export declare const Grid: FunctionComponent<GridProperties>;
