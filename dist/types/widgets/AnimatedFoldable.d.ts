import { CSSProperties, ReactNode } from "react";
import { CurvesUnit, DurationUnit, DeepOmit } from "../types";
export declare namespace AnimatedFoldable {
    type Overflow = "visible" | "hidden" | "clip" | "scroll" | "auto";
    type BehaviorCallback = (parent: HTMLElement, child: HTMLElement, start: DOMRect, unset: DOMRect) => void;
    type StyleCSSProperties = DeepOmit<CSSProperties, "transitionProperty" | "transitionDuration" | "transitionTimingFunction">;
    interface HorizontalStyle {
        start: DeepOmit<StyleCSSProperties, "width" | "minWidth" | "maxWidth">;
        end: DeepOmit<StyleCSSProperties, "width" | "minWidth" | "maxWidth">;
    }
    function Horizontal({ visible, overflow, duration, opacity, curve, children }: {
        visible: boolean;
        overflow?: Overflow;
        duration: DurationUnit;
        opacity?: boolean;
        curve?: CurvesUnit;
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    function Vertical({ visible, overflow, duration, opacity, curve, children }: {
        visible: boolean;
        overflow?: Overflow;
        duration: DurationUnit;
        opacity?: boolean;
        curve?: CurvesUnit;
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
}
