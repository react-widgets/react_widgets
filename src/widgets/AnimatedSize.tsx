import { CSSProperties, HTMLAttributes, ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, MeasuredSize, ReactWidgets } from "../types";
import { Box } from "./Box";
import { ElementUtil } from "@web-package/utility";
import { ReactWidgetsBinding } from "../modules/react_widgets_binding";

export interface AnimatedSizeOption {
    autoMeasureUniqueSize: boolean,
    sizeTolerance: number,
}

export function AnimatedSize({children, overflow = "clip", duration, curve}: {
    children: ReactNode,
    overflow?: CSSProperties["overflow"],
    duration: string,
    curve?: CurvesUnit,
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const lowerSizeRef = useRef<MeasuredSize>(null);
    const upperSizeRef = useRef<MeasuredSize>(null);
    const willChange = ReactWidgetsBinding.instance.optionValueOf("useWillChange") ? "width, height" : undefined;

    const getOuter = () => wrapperRef.current;
    const getInner = () => getOuter().firstElementChild as HTMLElement;

    useLayoutEffect(() => {
        const observer = new ResizeObserver(() => {
            lowerSizeRef.current = ElementUtil.intrinsicSizeOf(
                // The size of the wrapper element is not defined at the initialing,
                // so the layout size of the inner element must be calculated.
                lowerSizeRef.current ? getOuter() : getInner()
            );
        });

        observer.observe(getOuter(), {box: "border-box"});

        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const outer = getOuter();
        const inner = getInner();

        inner.ontransitionend = event => {
            event.stopPropagation();
        }

        // Animates because the children elements has changed,
        // i.e. This can be thought that the sub-tree elements has size can be changed.
        //
        // See Also, using MutationObserver to detect changes in the size
        // of child elements is not considered a best practice in React.
        {
            outer.style.display = "contents";
            inner.style.display = "contents";
            outer.style.width = null;
            inner.style.width = null;
            outer.style.height = null;
            inner.style.height = null;

            // Ignores the tasks about animation in initial layout phase.
            if (!lowerSizeRef.current) return;

            const lowerSize = lowerSizeRef.current;
            const upperSize = ElementUtil.intrinsicSizeOf(inner); // reflowed

            // Is not the children in this element has resized.
            if (lowerSize.width  == upperSize.width
             && lowerSize.height == upperSize.height) {
                return;
            }

            upperSizeRef.current = upperSize;

            outer.style.display = null;
            outer.style.width = `${lowerSize.width}px`;
            outer.style.height = `${lowerSize.height}px`;

            ElementUtil.reflow(inner);

            outer.style.width = `${upperSize.width}px`;
            outer.style.height = `${upperSize.height}px`;
            outer.ontransitionend = () => {
                outer.style.display = "contents";
                inner.style.display = "contents";
                outer.style.width = null;
                outer.style.height = null;
                inner.style.minWidth = null;
                inner.style.minHeight = null;
            }

            inner.style.display = null;
            inner.style.minWidth = `${upperSize.width}px`;
            inner.style.minHeight = `${upperSize.height}px`;
        }
    }, [children]);

    return (
        <Box
            ref={wrapperRef}
            overflow={overflow}
            willChange={willChange}
            transitionProperty="width, height"
            transitionDuration={duration}
            transitionTimingFunction={curve}
            children={<div>{children}</div>}
        />
    )
}