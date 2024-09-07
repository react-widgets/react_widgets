
/*
export class ScrollableVerticalElement extends HTMLElement {}
export class ScrollableHorzontalElement extends HTMLElement {}

customElements.define("scrollable-vertical", ScrollableVerticalElement);
*/

export namespace Scrollable {
    export function Vertical({children}: {children: JSX.Element}) {
        return <scrollable-vertical children={children} />;
    }

    export function Horizontal({children}: {children: JSX.Element}) {
        return <scrollable-horizontal children={children} />;
    }
}