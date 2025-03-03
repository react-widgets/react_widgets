import { CSSProperties, ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, DurationUnit, DeepOmit } from "../types";
import { Box } from "./Box";
import { ElementUtil } from "@web-package/utility";
import { ReactWidgetsBinding } from "../modules/react_widgets_binding";

export namespace AnimatedFoldable {
    /** Signature for the constants that defines CSS style properties about overflow. */
    export type Overflow = "visible" | "hidden" | "clip" | "scroll" | "auto";

    /** Signature for the interface that defines whether the transition animations is active. */
    export interface Transition {
        opacity: boolean;
    }

    export function Horizontal({visible, overflow = "hidden", duration, transition = {opacity: false}, curve, children}: {
        visible: boolean,
        overflow?: Overflow,
        transition?: Transition,
        duration: DurationUnit,
        curve?: CurvesUnit,
        children: ReactNode
    }) {
        const visibleRef = useRef<boolean>(visible);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const opacity = transition?.opacity ?? false;
        const willChange = ReactWidgetsBinding.instance.optionValueOf("useWillChange")
            ? opacity ? "width, opacity" : "width"
            : undefined;

        useLayoutEffect(() => {
            const outer = wrapperRef.current;
            const inner = outer.firstElementChild as HTMLElement;
            const innerSize = ElementUtil.intrinsicSizeOf(inner);
            const startSize = ElementUtil.intrinsicSizeOf(outer);

            inner.ontransitionend = event => {
                event.stopPropagation();
            }

            if (visible == visibleRef.current) {
                outer.style.width = visible ? null : "0px";
                inner.style.width = visible ? null : `${innerSize.width}px`;
            } else {
                outer.style.width = null;
                inner.style.width = null;
                const unsetSize = ElementUtil.intrinsicSizeOf(outer);

                if (opacity) {
                    visible ? outer.style.opacity = "1"
                            : outer.style.opacity = "0";
                }

                if (visible) {
                    outer.style.width = `${startSize.width}px`;
                    inner.style.width = `${startSize.width}px`;

                    ElementUtil.reflow(outer);

                    outer.style.width = `${unsetSize.width}px`;
                    outer.ontransitionend = () => {
                        outer.style.width = null;
                        inner.style.width = null;
                    }

                    inner.style.width = `${unsetSize.width}px`;
                } else {
                    outer.style.width = `${startSize.width}px`;
                    inner.style.width = "max-content";

                    ElementUtil.reflow(outer);

                    outer.style.width = "0px";
                    outer.ontransitionend = () => null;
                }
            }

            visibleRef.current = visible;
        }, [visible]);

        return (
            <Box
                ref={wrapperRef}
                opacity={opacity ? visible ? "1" : "0" : undefined}
                overflow={overflow}
                willChange={willChange}
                transitionProperty={opacity ? "width, opacity" : "width"}
                transitionDuration={duration}
                transitionTimingFunction={curve}
                children={<div>{children}</div>}
            />
        )
    }

    export function Vertical({visible, overflow = "hidden", duration, transition = {opacity: false}, curve, children}: {
        visible: boolean,
        overflow?: Overflow,
        transition?: Transition,
        duration: DurationUnit,
        curve?: CurvesUnit,
        children: ReactNode
    }) {
        const visibleRef = useRef<boolean>(visible);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const opacity = transition?.opacity ?? false;
        const willChange = ReactWidgetsBinding.instance.optionValueOf("useWillChange")
            ? opacity ? "height, opacity" : "height"
            : undefined;

        useLayoutEffect(() => {
            const outer = wrapperRef.current;
            const inner = outer.firstElementChild as HTMLElement;
            const innerSize = ElementUtil.intrinsicSizeOf(inner);
            const startSize = ElementUtil.intrinsicSizeOf(outer);

            inner.ontransitionend = event => {
                event.stopPropagation();
            }

            if (visible == visibleRef.current) {
                outer.style.height = visible ? null : "0px";
                inner.style.height = visible ? null : `${innerSize.height}px`;
            } else {
                outer.style.height = null;
                inner.style.height = null;
                const unsetSize = ElementUtil.intrinsicSizeOf(outer);

                if (opacity) {
                    visible ? outer.style.opacity = "1"
                            : outer.style.opacity = "0";
                }

                if (visible) {
                    outer.style.height = `${startSize.height}px`;
                    inner.style.height = `${startSize.height}px`;

                    ElementUtil.reflow(outer);
    
                    outer.style.height = `${unsetSize.height}px`;
                    outer.ontransitionend = () => {
                        outer.style.height = null;
                        inner.style.height = null;
                    }

                    inner.style.height = `${unsetSize.height}px`;
                } else {
                    outer.style.height = `${startSize.height}px`;
                    inner.style.height = "max-content";

                    ElementUtil.reflow(outer);

                    outer.style.height = "0px";
                    outer.ontransitionend = null;
                }
            }

            visibleRef.current = visible;
        }, [visible]);

        return (
            <Box
                ref={wrapperRef}
                opacity={opacity ? visible ? "1" : "0" : undefined}
                overflow={overflow}
                willChange={willChange}
                transitionProperty={opacity ? "height, opacity" : "height"}
                transitionDuration={duration}
                transitionTimingFunction={curve}
                children={<div>{children}</div>}
            />
        )
    }

    export function Bidirectional(p: {
        visible: boolean,
        overflow?: Overflow,
        transition?: Transition,
        duration: DurationUnit,
        curve?: CurvesUnit,
        children: ReactNode
    }) {
        const { children, ...props } = p;
        return (
            <Vertical {...props}><Horizontal {...props}>{children}</Horizontal></Vertical>
        )
    }
}