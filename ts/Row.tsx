import React from "react";

export function Row({children, gap, reverse, wrap}: {
    children?: React.ReactNode,
    gap?: string,
    reverse?: any
    wrap?: any,
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: reverse != null ? "row-reverse" : "row",
            flexWrap: wrap != null ? "wrap" : undefined,
            gap: gap,
        }}>{children}</div>
    )
}