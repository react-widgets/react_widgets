import { MeasuredSize } from "../types";
export declare class ElementUtil {
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement): void;
    /** Gets a intrinsic size(i.e. width, height) of a given element. */
    static sizeOf(element: Element): MeasuredSize;
}
