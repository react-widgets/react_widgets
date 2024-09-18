import { ReactNode } from "react";
import { DurationUnit } from "../types";
export declare namespace AnimatedSlider {
    function Horizontal({ index, duration, lazyLoad, children }: {
        index: number;
        duration: DurationUnit;
        lazyLoad?: boolean;
        children: JSX.Element[];
    }): import("react/jsx-runtime").JSX.Element;
}
export declare function AnimatedSliderSliver({ first, index, current, children }: {
    first: boolean;
    index: number;
    current: number;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
