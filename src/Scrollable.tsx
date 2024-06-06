import { CSSProperties, ReactNode } from "react";

export namespace Scrollable {
    export function Horizontal(p: {
        children?: ReactNode,
        center?: any,
        right?: any,
    }) {
        const style: CSSProperties = {
            display: "flex",
            justifyContent: p.center ? "center": p.right ? "right" : null,
            overflowX: "auto"
        }

        return (
            <div style={style}>
                <div style={{width: "100%", minWidth: "max-content"}}>{p.children}</div>    
            </div>
        )
    }

    export function Vertical(p: {
        children: ReactNode,
    }) {
        const style: CSSProperties = {
            display: "flex",
            overflowY: "auto",
            height: "100%"
        }

        return (
            <div style={style}>
                <div style={{width: "100%", height: "100%", maxHeight: "max-content"}}>{p.children}</div>    
            </div>
        )
    }
}