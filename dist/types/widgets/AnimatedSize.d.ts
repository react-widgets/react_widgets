import { ReactNode } from "react";
import { CurvesUnit } from "../types";
export interface AnimatedSizeOption {
    autoMeasureUniqueSize: boolean;
    sizeTolerance: number;
}
export declare function AnimatedSize({ children, duration, curve }: {
    children: ReactNode;
    duration: string;
    curve?: CurvesUnit;
}): import("react/jsx-runtime").JSX.Element;
