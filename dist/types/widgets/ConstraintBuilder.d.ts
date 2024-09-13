import { ReactNode } from "react";
/** Signature for a factory function of a react-node about constraint. */
export type ConstraintsBuilder<T> = (value: T) => ReactNode;
export declare class Constraint<T = number> {
    min: number;
    max: number;
    value: T;
    constructor(min: number, max: number, value: T);
}
export declare function ConstraintBuilder<T>({ constraints, usememo, builder }: {
    constraints: Constraint<T>[];
    usememo?: boolean;
    builder: ConstraintsBuilder<T>;
}): import("react/jsx-runtime").JSX.Element;
