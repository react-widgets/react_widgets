import { ReactNode } from "react";
import { CurvesUnit, DurationUnit } from "../types";
export declare namespace AnimatedFoldable {
    /** Signature for the constants that defines CSS style properties about overflow. */
    type Overflow = "visible" | "hidden" | "clip" | "scroll" | "auto";
    /** Signature for the interface that defines whether the transition animations is active. */
    interface Transition {
        opacity: boolean;
    }
    function Horizontal({ visible, overflow, duration, transition, curve, children }: {
        visible: boolean;
        overflow?: Overflow;
        transition?: Transition;
        duration: DurationUnit;
        curve?: CurvesUnit;
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    function Vertical({ visible, overflow, duration, transition, curve, children }: {
        visible: boolean;
        overflow?: Overflow;
        transition?: Transition;
        duration: DurationUnit;
        curve?: CurvesUnit;
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    function Bidirectional(p: {
        visible: boolean;
        overflow?: Overflow;
        transition?: Transition;
        duration: DurationUnit;
        curve?: CurvesUnit;
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
}
