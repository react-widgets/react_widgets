import { CSSProperties } from "react";

export namespace Scrollable {
    export function Horizontal(p: {
        children?: JSX.Element,
        center?: any,
        right?: any,
    }) {
        const style: CSSProperties = {
            display: "flex",
            width: "100%",
            flexShrink: "1",
            overflowX: "auto"
        }

        const innerStyle: CSSProperties = {
            flexShrink: 0,
            marginLeft: p.center != null || p.right != null ? "auto" : undefined,
            marginRight: p.center != null ? "auto" : undefined,
        }

        return (
            <div style={style}>
                <div style={innerStyle}>{p.children}</div>    
            </div>
        )
    }

    export function Vertical({children}: {
        children: JSX.Element,
    }) {
        const style: CSSProperties = {
            display: "flex",
            height: "100%",
            flexShrink: "1",
            overflowY: "auto"
        }

        return (
            <div style={style}>
                <div style={{width: "100%", height: "100%", maxHeight: "max-content"}}>{children}</div>    
            </div>
        )
    }
}