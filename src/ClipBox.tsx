import { CSSProperties, ReactNode, Ref } from "react";

export interface ClipBoxProperties extends Omit<CSSProperties, "display" | "overflow"> {
    refer?: Ref<HTMLDivElement>,
    className?: string,
    children: ReactNode,

    [key: string]: any;
}

export function ClipBox(p: ClipBoxProperties) {
    const style = {...p, ...{
        display: "flex",
        overflow: "hidden"
    }}

    return (
        <div
            ref={p.refer}
            className={p.className}
            style={style}
            children={p.children} 
        />
    )
}