import { ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, MeasuredSize } from "../types";
import { ElementUtil } from "../utils/element";
import { Box } from "./Box";

export interface AnimatedSizeOption {
    autoMeasureUniqueSize: boolean,
    sizeTolerance: number,
}

export function AnimatedSize({children, duration, curve, sizeTolerance}: {
    children: ReactNode,
    duration: string,
    curve?: CurvesUnit,
    sizeTolerance?: number,
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const lowerSizeRef = useRef<MeasuredSize>(null);
    const upperSizeRef = useRef<MeasuredSize>(null);

    const getOuter = () => wrapperRef.current;
    const getInner = () => getOuter().firstElementChild as HTMLElement;

    useLayoutEffect(() => {
        const innerSize = ElementUtil.sizeOf(getInner());

        { // Defines initial measured size about width and height.
            lowerSizeRef.current = innerSize;
            upperSizeRef.current = innerSize;
        }
    }, [])

    useLayoutEffect(() => {
        const outer = getOuter();
        const inner = getInner();

        (inner.firstChild as HTMLElement).ontransitionend = event => {
            event.stopPropagation();
        }

        // Animates because the children elements has changed,
        // i.e. This can be thought that the sub-tree elements has size can be changed.
        //
        // See Also, using MutationObserver to detect changes in the size
        // of child elements is not considered a best practice in React.
        {
            outer.style.width = null;
            outer.style.height = null;
            inner.style.minWidth = null;
            inner.style.minHeight = null;

            const lowerSize = lowerSizeRef.current;
            const upperSize = ElementUtil.sizeOf(inner); // reflowed

            // Is not the children in this element has resized.
            if (lowerSize.width  == upperSize.width
             && lowerSize.height == upperSize.height) {
                return;
            }

            upperSizeRef.current = upperSize;

            outer.style.width = `${lowerSize.width}px`;
            outer.style.height = `${lowerSize.height}px`;

            ElementUtil.reflow(inner);

            outer.style.width = `${upperSize.width}px`;
            outer.style.height = `${upperSize.height}px`;
            outer.ontransitionend = () => {
                outer.style.width = null;
                outer.style.height = null;
                inner.style.minWidth = null;
                inner.style.minHeight = null;
            }

            inner.style.minWidth = `${upperSize.width}px`;
            inner.style.minHeight = `${upperSize.height}px`;
        }

        const observer = new ResizeObserver(() => {
            lowerSizeRef.current = ElementUtil.sizeOf(outer);
        });

        observer.observe(outer, {box: "device-pixel-content-box"});

        return () => observer.disconnect();
    }, [children]);

    return (
        <Box
            refer={wrapperRef}
            overflow="hidden"
            transitionProperty="width, height"
            transitionDuration={duration}
            transitionTimingFunction={curve}
        >
            <div>{children}</div>
        </Box>
    )
}