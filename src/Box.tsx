import { CSSProperties, ReactNode } from "react";

export interface BoxProperties extends CSSProperties {
    children?: ReactNode,

    [key: string]: any;
}

export function Box(p: BoxProperties) {
    return <div style={p}>{p.children}</div>
}