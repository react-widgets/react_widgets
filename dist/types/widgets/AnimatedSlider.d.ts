import { DurationUnit } from "../types";
import { Property } from "csstype";
export declare namespace AnimatedSlider {
    interface Properties {
        index: number;
        duration: DurationUnit;
        viewport?: string;
        overflow?: Property.Overflow;
        children: JSX.Element | JSX.Element[];
    }
    function Horizontal({ index, duration, viewport, overflow, children: pChildren }: Properties): import("react/jsx-runtime").JSX.Element;
}
