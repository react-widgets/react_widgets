import { SizeUnit } from "../types";
/** Signature for the callback function that is called when a canvas drawing. */
export type CanvasDrawCallback<T extends RenderingContext> = (context: T) => void;
export declare class CanvasController {
    active: HTMLCanvasElement;
    animId: number;
    private _listeners;
    redraw(): void;
    addListener(listener: VoidFunction): void;
    removeListener(listener: VoidFunction): void;
    notifyListeners(): void;
}
export declare namespace Canvas {
    function Context2D({ width, height, onDraw, controller }: {
        width: SizeUnit;
        height: SizeUnit;
        onDraw: CanvasDrawCallback<CanvasRenderingContext2D>;
        controller?: CanvasController;
    }): import("react/jsx-runtime").JSX.Element;
    function Foundation<T extends RenderingContext>({ contextType, width, height, onDraw, controller }: {
        contextType: "2d" | "bitmaprenderer" | "webgl" | "webgl2";
        width: SizeUnit;
        height: SizeUnit;
        onDraw: CanvasDrawCallback<T>;
        controller?: CanvasController;
    }): import("react/jsx-runtime").JSX.Element;
}
