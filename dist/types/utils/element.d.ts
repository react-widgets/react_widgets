import { MeasuredSize } from "../types";
export declare class ElementUtil {
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement): void;
    /** Gets a intrinsic size of the given html element. */
    static measureSize(target: HTMLElement): MeasuredSize;
}
