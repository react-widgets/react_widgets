import { MutableRefObject, useLayoutEffect, useRef } from "react";

/**
 * Refer to `MeasuredSizeConnection` that are the ancestor or parent element
 * by referring to the given element ref.
 */
export function useMeasuredSizeConnectionRef(targetRef: MutableRefObject<HTMLElement>) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        ref.current = targetRef.current.closest(".measured_size_connection");
    }, []);

    return ref;
}