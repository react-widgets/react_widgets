import { CSSProperties, ReactNode, Ref } from "react";

export interface BoxProperties extends CSSProperties {
    refer?: Ref<HTMLDivElement>,
    className?: string,
    children?: ReactNode,
    focusable?: boolean,

    [key: string]: any;
}

export function Box(p: BoxProperties) {
    return (
        <div
            ref={p.refer}
            className={p.className}
            tabIndex={p.focusable ? 0 : null}
            style={p}
            children={p.children}
        />
    )
}