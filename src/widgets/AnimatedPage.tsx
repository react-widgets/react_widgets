import { DurationUnit } from "../types";

export function AnimatedPage({duration, children}: {
    duration: DurationUnit,
    children: JSX.Element | JSX.Element[]
}) {
    return children;
}