import { SizeUnit } from "../types";
export type CanvasDrawCallback<T extends RenderingContext> = (context: T) => void;
export declare class CanvasController<T extends RenderingContext> {
}
export declare namespace Canvas {
    function Context2D({ width, height, onDraw, controller }: {
        width: SizeUnit;
        height: SizeUnit;
        onDraw: CanvasDrawCallback<CanvasRenderingContext2D>;
        controller?: CanvasController<CanvasRenderingContext2D>;
    }): import("react/jsx-runtime").JSX.Element;
    function Foundation<T extends RenderingContext>({ contextType, width, height, onDraw, controller }: {
        contextType: "2d" | "bitmaprenderer" | "webgl" | "webgl2";
        width: SizeUnit;
        height: SizeUnit;
        onDraw: CanvasDrawCallback<T>;
        controller: CanvasController<T>;
    }): import("react/jsx-runtime").JSX.Element;
}
