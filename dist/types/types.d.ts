import { HTMLAttributes, RefAttributes } from "react";
/**
 * Signature for the type to overcome the limitations of the existing
 * typescript utility type `Omit`.
 */
export type DeepOmit<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P];
};
export type AbsoluteSizeUnit = "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px";
export type RelativeSizeUnit = "em" | "ex" | "ch" | "rem" | "lh" | "rlh" | "vw" | "vh" | "vmin" | "vmax" | "vmax" | "vb" | "vi" | "svm" | "svh" | "lvw" | "lvh" | "dvw" | "dvh";
/** Signature for the union type that is returning the mostly used pixel values. */
export type SizeUnit = string | "var()" | AbsoluteSizeUnit | RelativeSizeUnit;
/**
 * Signature for the union type that is returning the mostly used
 * animation duration values.
 */
export type DurationUnit = string | "var()" | "s" | "ms";
/**
 * Signature for the union type that is returning the linear bezier
 * curve form.
 */
export type CurvesUnit = string | "var()" | "cubic-bezier(0, 0, 1, 1)";
/** Signature for the type that defines a intrinsic size(i.e. width, height) of a element. */
export type MeasuredSize = {
    width: number;
    height: number;
};
export declare namespace ReactWidgets {
    /** Statically-defined react-widgets package of the option. */
    let REACT_WIDGETS_OPTION: Partial<Option>;
    interface Option {
        /**
         * Whether to define the default value of the `flex-shrink` for all elements as 0.
         * And default value is true.
         */
        useStrict: boolean;
        /**
         * Whether to define the package to use React's built-in memoization features to
         * cache rendering results and other data for performance optimization by default,
         * unless explicitly overridden by component-specific memoization options.
         */
        useDefaultMemo: boolean;
    }
}
/** Signature for the types that defines a component of React. */
type JSXCustomElement<T extends HTMLElement> = HTMLAttributes<T> & RefAttributes<T>;
declare module "react/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            "widget-row": JSXCustomElement<HTMLDivElement>;
            "widget-column": JSXCustomElement<HTMLDivElement>;
            "scrollable-vertical": JSXCustomElement<HTMLDivElement>;
            "scrollable-horizontal": JSXCustomElement<HTMLDivElement>;
        }
    }
}
export {};
