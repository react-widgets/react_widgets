import { CSSProperties, ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, DurationUnit, FlexOmit } from "../types";
import { Box } from "./Box";
import { HTMLElementUtil } from "../utils/html";

export namespace AnimatedFoldable {
    export type Overflow = "visible" | "hidden" | "clip" | "scroll" | "auto";

    export type BehaviorCallback = (
        parent: HTMLElement,
        child: HTMLElement,
        start: DOMRect,
        unset: DOMRect
    ) => void;

    export type StyleCSSProperties = FlexOmit<CSSProperties,
        | "transitionProperty"
        | "transitionDuration"
        | "transitionTimingFunction"
    >
    
    export interface HorizontalStyle {
        start: FlexOmit<StyleCSSProperties, "width" | "minWidth" | "maxWidth">;
        end  : FlexOmit<StyleCSSProperties, "width" | "minWidth" | "maxWidth">;
    }

    export function Horizontal({visible, overflow = "hidden", duration, curve, children}: {
        visible: boolean,
        overflow?: Overflow,
        duration: DurationUnit,
        curve?: CurvesUnit,
        children: ReactNode
    }) {
        const visibleRef = useRef<boolean>(visible);
        const wrapperRef = useRef<HTMLDivElement>(null);

        useLayoutEffect(() => {
            const outer = wrapperRef.current;
            const inner = outer.firstElementChild as HTMLElement;
            const startRect = outer.getBoundingClientRect();

            inner.ontransitionend = event => {
                event.stopPropagation();
            }
            
            if (visible == visibleRef.current) {
                outer.style.width = visible ? null : "0px";
                inner.style.width = `${startRect.width}px`;
            } else {
                outer.style.width = null;
                inner.style.width = null;
                const unsetRect = outer.getBoundingClientRect();

                if (visible) {
                    outer.style.width = `${startRect.width}px`;
                    inner.style.width = `${startRect.width}px`;

                    HTMLElementUtil.reflow(outer);
    
                    outer.style.width = `${unsetRect.width}px`;
                    outer.ontransitionend = () => {
                        outer.style.width = null;
                        inner.style.width = null;
                    }
                    
                    inner.style.width = `${unsetRect.width}px`;
                } else {
                    outer.style.width = `${startRect.width}px`;
                    inner.style.width = `${unsetRect.width}px`;
    
                    HTMLElementUtil.reflow(outer);
    
                    outer.style.width = `0px`;
                    outer.ontransitionend = null;
                }
            }

            visibleRef.current = visible;
        }, [visible]);

        return (
            <Box
                refer={wrapperRef}
                overflow={overflow}
                transitionProperty="width"
                transitionDuration={duration}
                transitionTimingFunction={curve}
                children={<div>{children}</div>}
            />
        )
    }

    export function Vertical({visible, overflow = "hidden", duration, curve, children}: {
        visible: boolean,
        overflow?: Overflow,
        duration: DurationUnit,
        curve?: CurvesUnit,
        children: ReactNode
    }) {
        const visibleRef = useRef<boolean>(visible);
        const wrapperRef = useRef<HTMLDivElement>(null);

        useLayoutEffect(() => {
            const outer = wrapperRef.current;
            const inner = outer.firstElementChild as HTMLElement;
            const startRect = outer.getBoundingClientRect();

            inner.ontransitionend = event => {
                event.stopPropagation();
            }
            
            if (visible == visibleRef.current) {
                outer.style.height = visible ? null : "0px";
                inner.style.height = `${startRect.height}px`;
            } else {
                outer.style.height = null;
                inner.style.height = null;
                const unsetRect = outer.getBoundingClientRect();

                if (visible) {
                    outer.style.height = `${startRect.height}px`;
                    inner.style.height = `${startRect.height}px`;

                    HTMLElementUtil.reflow(outer);
    
                    outer.style.height = `${unsetRect.height}px`;
                    outer.ontransitionend = () => {
                        outer.style.height = null;
                        inner.style.height = null;
                    }
                    
                    inner.style.height = `${unsetRect.height}px`;
                } else {
                    outer.style.height = `${startRect.height}px`;
                    inner.style.height = `${unsetRect.height}px`;
    
                    HTMLElementUtil.reflow(outer);
    
                    outer.style.height = `0px`;
                    outer.ontransitionend = null;
                }
            }

            visibleRef.current = visible;
        }, [visible]);

        return (
            <Box
                refer={wrapperRef}
                overflow={overflow}
                transitionProperty="height"
                transitionDuration={duration}
                transitionTimingFunction={curve}
                children={<div>{children}</div>}
            />
        )
    }
}