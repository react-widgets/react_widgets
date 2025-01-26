import { DurationUnit } from "../types";
export declare namespace AnimatedReplace {
    interface Properties {
        index: number;
        duration: DurationUnit;
        width?: string;
        height?: string;
        lazyLoad?: boolean;
        children: JSX.Element | JSX.Element[];
    }
    function Horizontal({ index, duration, width, height, lazyLoad, children: pChildren }: Properties): import("react/jsx-runtime").JSX.Element;
}
