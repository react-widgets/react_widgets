import { CSSProperties, ReactNode } from "react";
import { FlexOmit } from "../types";

export enum TextType {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    span,
}

export enum TextAlignment {
    left = "left",
    center = "center",
    right = "end"
}

export interface TextProperties extends FlexOmit<CSSProperties, "display" | "WebkitBoxOrient" | "WebkitLineClamp" | "overflow"> {
    children: ReactNode,
    type?: TextType,
    maxLine?: number,
    alignment?: TextAlignment,

    [key: string]: any;
}

export function Text(p: TextProperties) {
    const style: CSSProperties = {...p, ...{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: p.maxLine,
        textAlign: p.alignment,
        overflow: "hidden"
    } as CSSProperties}

    switch (p.type) {
        case TextType.h1: return <h1 style={style}>{p.children}</h1>
        case TextType.h2: return <h2 style={style}>{p.children}</h2>
        case TextType.h3: return <h3 style={style}>{p.children}</h3>
        case TextType.h4: return <h4 style={style}>{p.children}</h4>
        case TextType.h5: return <h5 style={style}>{p.children}</h5>
        case TextType.h6: return <h6 style={style}>{p.children}</h6>
        case TextType.a: return <a style={style}>{p.children}</a>
        case TextType.p: return <p style={style}>{p.children}</p>
        case TextType.span: return <span style={style}>{p.children}</span>
        default: return <div style={style}>{p.children}</div>
    }
}