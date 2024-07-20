import { CSSProperties, ReactNode, Ref } from "react";
import { SizeUnit } from "../types";

export interface BoxProperties extends CSSProperties {
    refer?: Ref<HTMLDivElement>,
    className?: string,
    children?: ReactNode,
    focusable?: boolean,
    size?: SizeUnit,

    [key: string]: any;
}

export function Box(p: BoxProperties) {
    const style = {
        ...{flexShrink: 0, boxSizing: "border-box"} as CSSProperties,
        ...p
    };

    if (p.size) {
        console.assert(p.width != null, "The width cannot be defined when defining the size.");
        console.assert(p.height != null, "The height cannot be defined when defining the size.");
        style.width = p.size;
        style.height = p.size;
    }

    return (
        <div
            ref={p.refer}
            className={p.className}
            tabIndex={p.focusable ? 0 : null}
            style={style}
            children={p.children}
        />
    )
}