import { MutableRefObject } from "react";
import { MeasuredSize } from "../types";

export class HTMLElementUtil { 
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement) {
        target.getBoundingClientRect();
    }

    /**
     * Returns a unique size of the given element by calculating
     * for a scale degree.
     */
    static measureSize(target: HTMLElement, tolerance?: number): MeasuredSize {
        const paintedSize = target.getBoundingClientRect();
        const scaleX = target.clientWidth / paintedSize.width;
        const scaleY = target.clientHeight / paintedSize.height;
        const tolerancePx = tolerance ?? 0.3;

        return {
            width: paintedSize.width * scaleX + tolerancePx,
            height: paintedSize.height * scaleY + tolerancePx
        };
    }

    static measureSizeByConnection(ref: MutableRefObject<HTMLDivElement>): MeasuredSize {
        return ref.current.getBoundingClientRect(); // .measured_size_connection
    }
}