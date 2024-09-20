import { ReactNode } from "react";
import { CurvesUnit, DurationUnit, SizeUnit } from "../types";
/**
 * This namespace provides components for horizontal and vertical tab navigation.
 * It handles the rendering of navigation items and applies transitions for
 * visual effects when changing the active tab.
 */
export declare namespace TabNavigation {
    /** Signature for the interface that defines a custom style of tab-navigation. */
    interface Style {
        backgroundColor?: string;
        borderRadius?: string;
        width?: string;
        thickness?: string;
    }
    /** This value defines a default style of tab-navigation. */
    const DEFUALT_STYLE: Required<Style>;
    function Horizontal({ children, index, style, duration, curve, gap }: {
        children: ReactNode;
        index: number;
        style?: Style;
        duration: DurationUnit;
        curve?: CurvesUnit;
        gap?: SizeUnit;
    }): import("react/jsx-runtime").JSX.Element;
    function Vertical({ children, index, style, duration, curve, gap }: {
        children: ReactNode;
        index: number;
        style?: Style;
        duration: DurationUnit;
        curve?: CurvesUnit;
        gap?: SizeUnit;
    }): import("react/jsx-runtime").JSX.Element;
}
