import { useLayoutEffect, useRef } from "react";
import { DurationUnit } from "../types"
import { Box } from "./Box";

export namespace AnimatedReplace {
    export function Horizontal({index, duration, children}: {
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
            const children = Array.from(wrapper.children) as HTMLElement[];
            const active = children[index];
            const others = children.filter((_: HTMLElement, i: number) => i != index);

            for (let i = 0; i < children.length; i++) {
                children[i].style.minWidth = "max-content";
            }

            wrapper.style.removeProperty("width");
            wrapper.style.removeProperty("height"); 

            const activeRect = active.getBoundingClientRect();

            wrapper.style.width = `${activeRect.width}px`;
            wrapper.style.height = `${activeRect.height}px`;
        }, [index]);

        return (
            <Box
                ref={wrapperRef}
                display="flex"
                children={children.map(item => <div>{item}</div>)}
            />
        )
    }
}