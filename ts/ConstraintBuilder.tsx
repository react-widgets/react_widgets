import React from "react"

export class Constraint<T = number> {
    constructor(
        public min: number,
        public max: number,
        public value: T,
    ) {
        if (min > max) throw new Error("A min-constraint must be less than a max-constraint.");
    }
}

export function ConstraintBuilder() {
    return (<div></div>);
}