import { ReactNode, useLayoutEffect, useRef } from "react";
import { ElementUtil } from "../utils/element";

export type ExpandedDirection = "vertical" | "horizontal";

export function Expanded({direction, children}: {
    direction: ExpandedDirection,
    children: ReactNode
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const wrapperParent = wrapper.parentElement;
        const wrapperOthers = Array.from(wrapperParent.children).filter(c => c != wrapper);

        const onLayout = () => {
            // Ensures that it does not affect the existing parent layout calculations.
            wrapper.style.width = "0px";
            wrapper.style.height = "0px";

            // Calculates the sum of the sizes of all the parent children, excluding itself.
            const othersSize = wrapperOthers.reduce((value, other) => {
                const size = ElementUtil.measureSize(other);
                return {
                    width: value.width + size.width,
                    height: value.height + size.height
                }
            }, {width: 0, height: 0});

            const parentSize = ElementUtil.measureSize(wrapperParent);
            const parentWidth = parentSize.width;
            const parentHeight = parentSize.height;

            if (direction == "vertical") {
                wrapper.style.width = "unset";
                wrapper.style.height = `${Math.max(0, parentHeight - othersSize.height)}px`;
            } else {
                wrapper.style.height = "unset";
                wrapper.style.width = `${Math.max(0, parentWidth - othersSize.width)}px`;
            }
        }

        // Called only when the window size changes. In the case of `ResizeObserver`,
        // it may be involved in the layout, causing the callback to be called multiple times,
        // and warnings may be triggered by external libraries.
        //
        addEventListener("resize", onLayout);

        // Needs to be explicitly called once initially.
        onLayout();

        return () => removeEventListener("resize", onLayout);
    }, []);

    return (
        <div ref={wrapperRef}>{children}</div>
    )
}