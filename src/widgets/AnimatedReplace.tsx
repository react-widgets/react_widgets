import { ReactNode, useLayoutEffect, useRef } from "react";
import { DurationUnit } from "../types"
import { Box } from "./Box";
import { Row } from "./Row";

export namespace AnimatedReplace {
    export function Horizontal({index, duration, lazyLoad = true, children: pChildren}: {
        index: number;
        duration: DurationUnit;
        lazyLoad?: boolean;
        children: JSX.Element | JSX.Element[];
    }) {
        const children = Array.isArray(pChildren) ? pChildren : [pChildren];
        const indexRef = useRef<number>(index);
        const stateRef = useRef<number[]>([]);
        const states = stateRef.current;

        console.assert(index >= 0, "An index in the `AnimatedSlider` widget should not be given as negative numbers.");
        console.assert(index < children.length, "A given index cannot always be greater than the given children.");

        // When need to initialize states based on the current index.
        if (index == indexRef.current) {
            stateRef.current = (states.push(index), states);
        } else {
            if (states.includes(index) == false) {
                stateRef.current = (states.push(index), states);
            }
        }

        indexRef.current = index;

        return (
            <Row position="relative">{
                states.map(state => {
                    return (
                        <AnimatedReplaceSliver
                            key={state}
                            index={state}
                            first={state == 0}
                            current={index}
                            children={children[state]}
                        />
                    );
                })
            }</Row>
        )
    }
}

export function AnimatedReplaceSliver({first, index, current, children}: {
    first: boolean;
    index: number;
    current: number;
    children: ReactNode;
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const currentRef = useRef<number>(current);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        wrapper.style.transform = `translateX(-${current * 100}%)`;
        wrapper.style.transitionProperty = "transform";
        wrapper.style.transitionDuration = "0.5s";
    }, [current]);

    return (
        <Box ref={wrapperRef} children={children} />
    );
}