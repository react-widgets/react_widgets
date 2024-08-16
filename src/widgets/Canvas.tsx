import { useLayoutEffect, useRef } from "react";
import { SizeUnit } from "../types";
import { ElementUtil } from "../utils/element";

export type CanvasDrawCallback<T extends RenderingContext> = (context: T) => void;

export class CanvasController<T extends RenderingContext> {
    // TODO: later
}

export namespace Canvas {
    export function Context2D({width, height, onDraw, controller}: {
        width: SizeUnit,
        height: SizeUnit,
        onDraw: CanvasDrawCallback<CanvasRenderingContext2D>,
        controller?: CanvasController<CanvasRenderingContext2D>,
    }) {
        return (
            <Foundation
                contextType="2d"
                width={width}
                height={height}
                onDraw={onDraw}
                controller={controller}
            />
        )
    }

    export function Foundation<T extends RenderingContext>({contextType, width, height, onDraw, controller}: {
        contextType: "2d" | "bitmaprenderer" | "webgl" | "webgl2",
        width: SizeUnit,
        height: SizeUnit,
        onDraw: CanvasDrawCallback<T>,
        controller: CanvasController<T>
    }) {
        const canvasRef = useRef<HTMLCanvasElement>(null);

        useLayoutEffect(() => {
            const canvas = canvasRef.current;
    
            const observer = new ResizeObserver(() => {
                canvas.style.width = width;
                canvas.style.height = height;

                const canvasSize = ElementUtil.measureSize(canvas); // reflowed
                canvas.setAttribute("width", `${canvasSize.width}px`);
                canvas.setAttribute("height", `${canvasSize.height}px`);

                onDraw(canvas.getContext(contextType) as T);
            });
    
            observer.observe(canvas);
    
            return () => {
                observer.disconnect();
            }
        }, []);
    
        return (
            <canvas ref={canvasRef} />
        )
    }
}