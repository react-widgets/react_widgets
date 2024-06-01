import { SizeBuilder } from "./SizeBuilder";

// Signature for factory function of a react-node about constraint.
export type ConstraintsBuilder<T> = (value: T) => React.ReactNode;

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
    return (
        <SizeBuilder builder={(width, _) => {
            // Find the constraint value that matches the current window size.
            const value = constraints.find(e => e.min <= width && e.max >= width)?.value;
            if (value == null) {
                throw new Error("No constraint value exists for the current window size.");
            }
            
            return builder(value);
        }} />
    );
}