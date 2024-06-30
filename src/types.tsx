
/**
 * Signature for the type to overcome the limitations of the existing 
 * typescript utility type `Omit`.
 */
export type FlexOmit<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P]
};

/** Signature for the union type that is returning the mostly used pixel values. */
export type PixelsUnit = "3px" | "5px" | "10px" | "15px" | "20px" | "30px" | "40px" | "50px" | "100px";

/**
 * Signature for the union type that is returning the linear bezier
 * curve form.
 */
export type CurvesUnit = "cubic-bezier(0, 0, 1, 1)";