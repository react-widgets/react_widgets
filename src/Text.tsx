import { CSSProperties, ReactNode } from "react"
import { Box } from "./Box"

export interface TextProperties extends Omit<CSSProperties, "display" | "webkitBoxOrient" | "webkitLineClamp" | "overflow"> {
    children: ReactNode,
    maxLine?: number,

    [key: string]: any;
}

export function Text(p: TextProperties) {
    const style: CSSProperties = {...p, ...{
        display: "-webkit-box",
        webkitBoxOrient: "vertical",
        webkitLineClamp: p.maxLine,
        overflow: "hidden"
    } as CSSProperties}

    return (
        <span style={style}>{p.children}</span>
    )
}