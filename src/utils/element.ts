import { MeasuredSize } from "../types";

export class ElementUtil { 
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement) {
        target.getBoundingClientRect();
    }

    /** Gets a intrinsic size of the given html element. */
    static measureSize(target: Element): MeasuredSize {
        const style = getComputedStyle(target);
        const boxSizing = style.boxSizing;

        // Parse sizes all.
        const width = parseFloat(style.width);
        const height = parseFloat(style.height);
        const paddingL = parseFloat(style.paddingLeft);
        const paddingR = parseFloat(style.paddingRight);
        const paddingT = parseFloat(style.paddingTop);
        const paddingB = parseFloat(style.paddingBottom);
        const borderL = parseFloat(style.borderLeft);
        const borderR = parseFloat(style.borderRight);
        const borderT = parseFloat(style.borderTop);
        const borderB = parseFloat(style.borderBottom);

        // if content-box.
        return {
            width: width + paddingL + paddingR + borderL + borderR,
            height: height + paddingT + paddingB + borderT + borderB
        };
    }
}