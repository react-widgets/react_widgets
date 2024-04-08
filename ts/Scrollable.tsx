import React, { CSSProperties } from "react";

export namespace Scrollable {
    export function Horizontal(p: {
        children?: React.ReactNode,
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
                <div style={{width: "100%", maxWidth: "max-content"}}>{p.children}</div>    
            </div>
        )
    }
}