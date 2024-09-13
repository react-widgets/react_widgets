
/*
export class ScrollableVerticalElement extends HTMLElement {}
export class ScrollableHorzontalElement extends HTMLElement {}

customElements.define("scrollable-vertical", ScrollableVerticalElement);
*/

export namespace Scrollable {
    export interface Properties {
        children: JSX.Element;
        scrollbar?: boolean;
    }

    export function Vertical(p: Properties) {
        const scrollbar = !(p.scrollbar ?? true);
        return <scrollable-vertical children={p.children} {...(scrollbar && {"scrollbar-none": ""})} />;
    }

    export function Horizontal(p: Properties) {
        const scrollbar = !(p.scrollbar ?? true);
        return <scrollable-horizontal children={p.children} {...(scrollbar && {"scrollbar-none": ""})} />;
    }
}