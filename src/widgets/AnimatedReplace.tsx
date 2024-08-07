import { useLayoutEffect, useRef } from "react";
import { DurationUnit } from "../types"

export function AnimatedReplace({index, duration, children}: {
    index: number,
    duration: DurationUnit,
    children: JSX.Element[]
}) {
    const itemCount = children.length;
    const wrapperRef = useRef<HTMLDivElement>(null);
    
    console.assert(index >= 0, "A value of [index] cannot be negative.");
    console.assert(index < itemCount, "A value of [index] cannot be bigger than a given item-count.");

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;

        console.log(wrapper);
    }, [index]);

    return <div ref={wrapperRef}>{children}</div>;
}