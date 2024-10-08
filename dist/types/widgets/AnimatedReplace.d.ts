import { ReactNode } from "react";
import { DurationUnit } from "../types";
export declare namespace AnimatedReplace {
    function Horizontal({ index, duration, lazyLoad, children: pChildren }: {
        index: number;
        duration: DurationUnit;
        lazyLoad?: boolean;
        children: JSX.Element | JSX.Element[];
    }): import("react/jsx-runtime").JSX.Element;
}
export declare function AnimatedReplaceSliver({ first, index, current, children }: {
    first: boolean;
    index: number;
    current: number;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
