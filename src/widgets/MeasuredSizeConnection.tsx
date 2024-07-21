import { ReactNode } from "react";

/**
 * Used by wrapping this element when the unique size of an element
 * cannot be measured due to animation about scale.
 */
export function MeasuredSizeConnection({children}: {
    children: ReactNode,
}) {
    return (
        <div className="measured_size_connection" children={children} />
    )
}