import React from "react";

export function Column({children, gap, reverse, wrap}: {
    children?: React.ReactNode,
    gap?: string,
    reverse?: any,
    wrap?: any
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: reverse != null ? "column-reverse" : "column",
            flexWrap: wrap != null ? "wrap" : undefined,
            gap: gap,
        }}>{children}</div>
    )
}