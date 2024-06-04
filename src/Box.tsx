import { CSSProperties, ReactNode } from "react";

export interface BoxProperties extends CSSProperties {
    className?: string,
    children?: ReactNode,

    [key: string]: any;
}

export function Box(p: BoxProperties) {
    return <div className={p.className} style={p}>{p.children}</div>
}