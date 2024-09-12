import { ReactNode, useMemo } from "react";
import { SizeBuilder } from "./SizeBuilder";
import { ConditionalRender } from "./ConditionalRender";

/** Signature for a factory function of a react-node about constraint. */
export type ConstraintsBuilder<T> = (value: T) => ReactNode;

export class Constraint<T = number> {
    constructor(
        public min: number,
        public max: number,
        public value: T,
    ) {
        if (min > max) throw new Error("A min-constraint must be less than a max-constraint.");
    }
}

export function ConstraintBuilder<T>({constraints, builder}: {
    constraints: Constraint<T>[],
    builder: ConstraintsBuilder<T>
}) {
    console.assert(
        constraints.length != 0,
        "A constraints of ConstraintBuilder must be one or more."
    );

    return (
        <SizeBuilder.Viewport builder={(width, _) => {
            // Find the constraint value that matches the current window size.
            const value = constraints.find(e => e.min <= width && e.max >= width)?.value;
            if (value == null) {
                throw new Error("No constraint value exists for the current window size.");
            }

            // Memoize and recycle the builder result based on the value.
            // Because of due to the widget's characteristic where
            // the result remains the same if the input value is unchanged.
            return useMemo(() => builder(value), [value]);
        }} />
    );
}