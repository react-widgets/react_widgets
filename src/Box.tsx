import { CSSProperties, ReactNode, Ref } from "react";

export interface BoxProperties extends CSSProperties {
    refer?: Ref<HTMLDivElement>,
    className?: string,
    children?: ReactNode,

    [key: string]: any;
}

export function Box(p: BoxProperties) {
    return <div ref={p.refer} className={p.className} style={p}>{p.children}</div>
}