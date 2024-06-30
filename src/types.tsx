
/**
 * Signature for the type to overcome the limitations of the existing 
 * typescript utility type `Omit`.
 */
export type FlexOmit<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P]
};