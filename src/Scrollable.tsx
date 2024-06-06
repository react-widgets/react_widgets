import { CSSProperties, ReactNode } from "react";

export namespace Scrollable {
    export function Horizontal(p: {
        children?: ReactNode,
        center?: any,
        right?: any,
    }) {
        const style: CSSProperties = {
            display: "flex",
            width: "100%",
            justifyContent: p.center ? "center": p.right ? "right" : null,
            overflowX: "auto"
        }

        return (
            <div style={style}>
                <div style={{minWidth: "max-content"}}>{p.children}</div>    
            </div>
        )
    }

    export function Vertical(p: {
        children: ReactNode,
    }) {
        const style: CSSProperties = {
            display: "flex",
            height: "100%",
            overflowY: "auto"
        }

        return (
            <div style={style}>
                <div style={{width: "100%", height: "100%", maxHeight: "max-content"}}>{p.children}</div>    
            </div>
        )
    }
}