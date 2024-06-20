
export class HTMLElementUtil {
    /** Call the function to trigger a reflow of the given element. */
    static reflow(target: HTMLElement) {
        target.getBoundingClientRect();
    }
}