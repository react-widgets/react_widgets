import { useLayoutEffect, useRef } from "react";
import { MeasuredSize } from "../types";

export type LayoutCallback = (size: MeasuredSize, element: HTMLElement) => void;

export function Layout({before, behind, children}: {
    before?: LayoutCallback,
    behind?: LayoutCallback,
    children: JSX.Element
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const element = wrapperRef.current as HTMLElement;

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
    }, [children]);

    return <div ref={wrapperRef}>{children}</div>;
}