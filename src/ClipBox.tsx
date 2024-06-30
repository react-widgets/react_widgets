import { CSSProperties, ReactNode, Ref } from "react";
import { FlexOmit } from "./types";

export interface ClipBoxProperties extends FlexOmit<CSSProperties, "display" | "overflow"> {
    refer?: Ref<HTMLDivElement>,
    className?: string,
    children: ReactNode,

    [key: string]: any;
}

export function ClipBox(p: ClipBoxProperties) {
    const style = {...p, ...{
        display: "flex",
        overflow: "hidden"
    } as CSSProperties}

    return (
        <div
            ref={p.refer}
            className={p.className}
            style={style}
            children={p.children} 
        />
    )
}