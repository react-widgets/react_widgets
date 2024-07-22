
/**
 * Signature for the type to overcome the limitations of the existing 
 * typescript utility type `Omit`.
 */
export type FlexOmit<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P]
};

export type AbsoluteSizeUnit = "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px"
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

export type MeasuredSize = {width: number, height: number};

export declare module ReactWidgets {
    /** Statically-defined react-widgets package of the option. */
    export const REACT_WIDGETS_OPTION: Option;

    export interface Option {
        /** Whether to define the default value of the `flex-shrink` for all elements as 0. */
        useStrict: boolean,
    }
}