import React, { CSSProperties } from "react";

export function Grid({children, rowCount, gap, verticalGap, horizontalGap, padding, margin}: {
    children?: React.ReactNode,
    rowCount: number,
    gap?: string,
    verticalGap?: string,
    horizontalGap?: string,
    padding?: string,
    margin?: string,
}) {
    const style: CSSProperties = {
        display: "grid",
        gridTemplateColumns: Array.from({length: rowCount}, () => "1fr").join(" "),
        padding: padding,
        margin: margin,
    }

    if (gap != null) {
        style.gap = gap;
    } else if (verticalGap != null) {
        style.rowGap = verticalGap;
    } else if (horizontalGap != null) {
        style.columnGap = horizontalGap;
    }

    return (
        <div style={style}>{children}</div>
    )
}