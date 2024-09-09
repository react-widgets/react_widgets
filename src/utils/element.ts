import { MeasuredSize } from "../types";

export class ElementUtil { 
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement) {
        target.getBoundingClientRect();
    }

    /** Gets a intrinsic size(i.e. width, height) of a given element. */
    static sizeOf(element: Element): MeasuredSize {
        const style = getComputedStyle(element);
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

        // Get the box-sizing property, which determines how width and height are calculated.
        const boxSizing = style.boxSizing;

        let totalWidth = width;
        let totalHeight = height;

        // When box-sizing is set to `content-box`, add padding and border to the width and height,
        // because the reported width/height doesn't include these in content-box mode.
        if (boxSizing == "content-box") {
            totalWidth += paddingL + paddingR + borderL + borderR;
            totalHeight += paddingT + paddingB + borderT + borderB;
        }

        return {
            width: totalWidth,
            height: totalHeight
        };
    }
}