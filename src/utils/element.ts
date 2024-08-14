import { MutableRefObject } from "react";
import { MeasuredSize } from "../types";

export class ElementUtil { 
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement) {
        target.getBoundingClientRect();
    }

    /** Gets a intrinsic size of the given html element. */
    static measureSize(target: HTMLElement): MeasuredSize {
        const computedStyle = getComputedStyle(target);
        return {
            width: parseFloat(computedStyle.width),
            height: parseFloat(computedStyle.height)
        };
    }

    static measureSizeByConnection(ref: MutableRefObject<HTMLDivElement>): MeasuredSize {
        return ref.current.getBoundingClientRect(); // .measured_size_connection
    }
}