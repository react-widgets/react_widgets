import React, { CSSProperties } from "react";

/*
export interface ScrollableProperties {
    children?: React.ReactNode
}
*/

export function Scrollable(p: {
    children?: React.ReactNode,
}) {
    const parentStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        overflow: "auto",
    }
    const childStyle: CSSProperties = {
        minWidth: "max-content",
    }

    return (
        <div style={parentStyle}>
            <div style={childStyle}>{p.children}</div>    
        </div>
    )
}