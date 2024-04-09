import React, { CSSProperties } from "react";

export interface GridProperties extends Omit<CSSProperties, "display" | "gridTemplateColumns" | "padding" | "margin"> {
    children?: React.ReactNode,
    rowCount: number,
    gap?: string,
    verticalGap?: string,
    horizontalGap?: string,
    padding?: string,
    margin?: string,
}

export function Grid(p: GridProperties) {
    const style: CSSProperties = {...p, ...{ // given style + automatic and required style
        display: "grid",
        gridTemplateColumns: Array.from({length: p.rowCount}, () => "1fr").join(" "),
        padding: p.padding,
        margin: p.margin,
    }};

    if (p.gap != null) {
        style.gap = p.gap;
    } else if (p.verticalGap != null) {
        style.rowGap = p.verticalGap;
    } else if (p.horizontalGap != null) {
        style.columnGap = p.horizontalGap;
    }

    return (
        <div style={style}>{p.children}</div>
    )
}