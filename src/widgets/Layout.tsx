import { ReactNode, useLayoutEffect, useRef } from "react";
import { MeasuredSize } from "../types";

/**
 * Signature for the callback function of a measured size about width, height
 * for target element about `Layout` widget.
 */
export type LayoutCallback = (size: MeasuredSize, element: HTMLElement) => void;

export function Layout({before, behind, children}: {
    before?: LayoutCallback,
    behind?: LayoutCallback,
    children: ReactNode
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const element = wrapperRef.current as HTMLElement;
        const onRender = () => {
            // Removes the style properties of a wrapper for layout target element,
            // To measure the exact size of an element.
            element.removeAttribute("style");

            if (before) {
                const rect = element.getBoundingClientRect();
                before(rect, element);
            }
            if (behind) {
                console.assert(before != null, "[before] and [behind] must be used together.");
                
                const rect = element.getBoundingClientRect();
                behind(rect, element);
            }
        }

        // Even if the component is not re-components, when the element's size changes,
        // it must go through a separate rendering process.
        const observer = new ResizeObserver(onRender);
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return <div ref={wrapperRef}>{children}</div>;
}