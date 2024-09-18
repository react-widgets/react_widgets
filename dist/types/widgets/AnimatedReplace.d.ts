import { DurationUnit } from "../types";
export declare namespace AnimatedReplace {
    function Horizontal({ index, duration, lazyLoad, children }: {
        index: number;
        duration: DurationUnit;
        lazyLoad?: boolean;
        children: JSX.Element[];
    }): import("react/jsx-runtime").JSX.Element;
}
export declare function AnimatedReplaceSliver(): void;
