import { CSSProperties } from "react";

export class ScrollableVerticalElement extends HTMLElement {}
export class ScrollableHorzontalElement extends HTMLElement {}

customElements.define("scrollable-vertical", ScrollableVerticalElement);

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
        return (
            <scrollable-vertical>
                <div style={{width: "100%", height: "max-content"}}>{children}</div>    
            </scrollable-vertical>
        )
    }
}