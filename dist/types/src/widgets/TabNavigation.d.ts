import { ReactNode } from "react";
import { CurvesUnit, DurationUnit, SizeUnit } from "../types";
export declare namespace TabNavigation {
    interface Style {
        backgroundColor?: string;
        borderRadius?: string;
        width?: string;
        thickness?: string;
    }
    const defualtStyle: Style;
    function Horizontal({ children, index, style, duration, curve, gap }: {
        children: ReactNode;
        index?: number;
        style?: Style;
        duration: DurationUnit;
        curve?: CurvesUnit;
        gap?: SizeUnit;
    }): import("react/jsx-runtime").JSX.Element;
    function Vertical({ children, index, style, duration, curve, gap }: {
        children: ReactNode;
        index?: number;
        style?: Style;
        duration: DurationUnit;
        curve?: CurvesUnit;
        gap?: SizeUnit;
    }): import("react/jsx-runtime").JSX.Element;
}
