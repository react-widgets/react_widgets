import React from "react";

export function Grid({children, rowCount, gap, verticalGap, horizontalGap, reverse = false}: {
    children?: React.ReactNode,
    rowCount: number,
    gap?: string,
    verticalGap?: string,
    horizontalGap?: string,
    reverse?: boolean
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: reverse ? "column-reverse" : "column",
            gap: gap,
            rowGap: horizontalGap,
            columnGap: verticalGap
        }}>
            {children}
        </div>
    )
}