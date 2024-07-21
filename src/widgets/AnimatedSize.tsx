import { ReactNode, useLayoutEffect, useRef } from "react";
import { ClipBox } from "./ClipBox";
import { HTMLElementUtil } from "../utils/html";
import { CurvesUnit } from "../types";
import { useMeasuredSizeConnectionRef } from "../hooks/useMeasuredSizeConnectionRef";

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
    const measuredRef = useMeasuredSizeConnectionRef(wrapperRef);
    const lowerSizeRef = useRef<{width: number, height: number}>(null);
    const upperSizeRef = useRef<{width: number, height: number}>(null);

    /**
     * Returns a unique size of the given element by calculating
     * for a scale degree.
     */
    const measureSize = (target: HTMLElement): {width: number, height: number} => {
        return measuredRef.current
            ? HTMLElementUtil.measureSizeByConnection(measuredRef)
            : HTMLElementUtil.measureSize(target, sizeTolerance);
    }

    useLayoutEffect(() => {
        const outer = wrapperRef.current;
        const inner = outer.firstElementChild as HTMLElement;

        const size = measureSize(inner);
        {
            lowerSizeRef.current = size;
            upperSizeRef.current = size;
        }

        (inner.firstChild as HTMLElement).ontransitionend = event => {
            event.stopPropagation();
        }

        // Called when a child is reflowed and added or removed,
        // or the style changes.
        const observer1 = new MutationObserver(() => {
            {
                const a = measureSize(inner.firstElementChild as HTMLElement);
                const b = upperSizeRef.current;

                // The measured size must be different from the previous size.
                if (a.width == b.width && a.height == b.height) {
                    return;
                }
            }

            outer.style.width = null;
            outer.style.height = null;
            inner.style.minWidth = null;
            inner.style.minHeight = null;

            const size = measureSize(inner); // reflowed

            upperSizeRef.current = size;

            outer.style.width = `${lowerSizeRef.current.width}px`;
            outer.style.height = `${lowerSizeRef.current.height}px`;

            HTMLElementUtil.reflow(inner);

            outer.style.width = `${size.width}px`;
            outer.style.height = `${size.height}px`;
            outer.ontransitionend = () => {
                outer.style.width = null;
                outer.style.height = null;
                inner.style.minWidth = null;
                inner.style.minHeight = null;
            }

            inner.style.minWidth = `${size.width}px`;
            inner.style.minHeight = `${size.height}px`;
        });

        const observer2 = new ResizeObserver(() => {
            lowerSizeRef.current = measureSize(outer);
        });

        observer2.observe(outer, {});
        observer1.observe(inner.firstChild, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        });

        return () => {
            observer1.disconnect();
            observer2.disconnect();
        }
    }, []);

    return (
        <ClipBox
            refer={wrapperRef}
            transitionProperty="width, height"
            transitionDuration={duration}
            transitionTimingFunction={curve}
        >
            <div>{children}</div>
        </ClipBox>
    )
}