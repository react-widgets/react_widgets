import React, { CSSProperties } from "react";

export interface BoxProperties extends CSSProperties {
    children?: React.ReactNode,
}

export function Box(p: BoxProperties) {
    return <div style={p}>{p.children}</div>
}