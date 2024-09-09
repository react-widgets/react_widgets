import { ReactNode, useLayoutEffect, useRef } from "react";
import { ElementUtil } from "../utils/element";

/** Signature for the type of a direction for Expanded widget. */
export type ExpandedDirection = "vertical" | "horizontal";

/**
 * A widget that adapts to fill the remaining space within its parent container.
 * This component adjusts its size based on the available space left after
 * 
 * considering other siblings within the same parent element.
 * It supports both vertical and horizontal directions.
 * 
 * See Also, Primarily used to resolve issues with inheriting the parent size as is.
*/
export function Expanded({direction, children}: {
    direction: ExpandedDirection,
    children: ReactNode
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const wrapperParent = wrapper.parentElement;
        const wrapperOthers = Array.from(wrapperParent.children).filter(c => c != wrapper);
        
        let previousWidth = 0;
        let previousHeight = 0;

        const observer = new ResizeObserver(entries => {
            const currentWidth = entries[0].contentBoxSize[0].inlineSize;
            const currentHeight = entries[0].contentBoxSize[0].blockSize;

            // When a given size has not changed, no calculation will be performed.
            if (direction == "vertical" && previousHeight == currentHeight) return;
            if (direction == "horizontal" && previousWidth == currentWidth) return;

            previousWidth = currentWidth;
            previousHeight = currentHeight;

            // Calculates the sum of the sizes of all the parent children, excluding itself.
            const othersSize = wrapperOthers.reduce((value, other) => {
                const size = ElementUtil.sizeOf(other);
                return {
                    width: value.width + size.width,
                    height: value.height + size.height
                }
            }, {width: 0, height: 0});

            // An observer may trigger unnecessary calls due to a `reflow` caused by a next size definition,
            // therefore, The observer must disconnect for a while until the next frame.
            observer.disconnect();

            direction == "vertical"
                ? wrapper.style.height = `calc(100% - ${othersSize.height}px)`
                : wrapper.style.minWidth = `calc(100% - ${othersSize.width}px)`;

            requestAnimationFrame(() => observer.observe(wrapperParent));
        });

        observer.observe(wrapperParent);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={wrapperRef}>{children}</div>
    )
}