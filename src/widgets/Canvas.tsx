import { useLayoutEffect, useRef } from "react";
import { SizeUnit } from "../types";
import { ElementUtil } from "@web-package/utility";

/** Signature for the callback function that is called when a canvas drawing. */
export type CanvasDrawCallback<T extends RenderingContext> = (context: T) => void;

export class CanvasController {
    active: HTMLCanvasElement;
    animId: number;

    private _listeners: VoidFunction[] = [];

    redraw() {
        this.animId && cancelAnimationFrame(this.animId);
        this.animId = requestAnimationFrame(() => {
            this.notifyListeners();
            this.animId = null;
        });
    }

    addListener(listener: VoidFunction) {
        console.assert(!this._listeners.includes(listener), "Already exists a given listener.");
        this._listeners.push(listener);
    }

    removeListener(listener: VoidFunction) {
        console.assert(this._listeners.includes(listener), "Already not exists a given listener.");
        this._listeners = this._listeners.filter(l => l != listener);
    }

    notifyListeners() {
        this._listeners.forEach(listener => listener());
    }
}

export namespace Canvas {
    export function Context2D({width, height, onDraw, controller}: {
        width: SizeUnit,
        height: SizeUnit,
        onDraw: CanvasDrawCallback<CanvasRenderingContext2D>,
        controller?: CanvasController,
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
        controller?: CanvasController
    }) {
        const canvasRef = useRef<HTMLCanvasElement>(null);

        useLayoutEffect(() => {
            const canvas = canvasRef.current;

            // When a size changes, the canvas size should change accordingly.
            const observer = new ResizeObserver(() => {
                canvas.style.width = width;
                canvas.style.height = height;

                const canvasSize = ElementUtil.intrinsicSizeOf(canvas); // reflowed
                canvas.setAttribute("width", `${canvasSize.width}px`);
                canvas.setAttribute("height", `${canvasSize.height}px`);

                onDraw(canvas.getContext(contextType) as T);
            });

            observer.observe(canvas);

            return () => {
                observer.disconnect();
            }
        }, []);

        useLayoutEffect(() => {
            const canvas = canvasRef.current;

            // Perform initialization if a given cavnas controller exists.
            if (controller) {
                controller.active = canvas;
                controller.addListener(() => onDraw(canvas.getContext(contextType) as T));
            }
        }, [controller]);

        return (
            <canvas ref={canvasRef} />
        )
    }
}