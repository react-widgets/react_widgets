import { CSSProperties, ReactNode } from "react";
import { CurvesUnit } from "../types";
export interface AnimatedSizeOption {
    autoMeasureUniqueSize: boolean;
    sizeTolerance: number;
}
export declare function AnimatedSize({ children, overflow, duration, curve }: {
    children: ReactNode;
    overflow?: CSSProperties["overflow"];
    duration: string;
    curve?: CurvesUnit;
}): import("react/jsx-runtime").JSX.Element;
