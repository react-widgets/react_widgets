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

        const observer = new ResizeObserver(() => {
            // Ensures that it does not affect the existing parent layout calculations.
            direction == "vertical"
                ? wrapper.style.height = "0px"
                : wrapper.style.width = "0px";

            // Calculates the sum of the sizes of all the parent children, excluding itself.
            const othersSize = wrapperOthers.reduce((value, other) => {
                const size = ElementUtil.measureSize(other);
                return {
                    width: value.width + size.width,
                    height: value.height + size.height
                }
            }, {width: 0, height: 0});

            if (direction == "vertical") {
                wrapper.style.height = `calc(100% - ${othersSize.height}px)`;
            } else {
                wrapper.style.width = `calc(100% - ${othersSize.width}px)`;
            }
        });

        observer.observe(wrapperParent);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={wrapperRef}>{children}</div>
    )
}