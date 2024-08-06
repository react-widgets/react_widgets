import { ReactNode } from "react";
import { DurationUnit } from "../types"

export type AnimatedReplaceIndexedBuilder = (index: number) => ReactNode;

export function AnimatedReplace({index, duration, children}: {
    index: number,
    duration: DurationUnit,
    children: JSX.Element[]
}) {
    return (
        <AnimatedReplace.Builder index={index} duration={duration} builder={(i) => children[i]} />
    )
}

export namespace AnimatedReplace {
    export function Builder({index, duration, builder}: {
        index: number,
        duration: DurationUnit,
        builder: AnimatedReplaceIndexedBuilder,
    }) {
        return builder(index);
    }
}