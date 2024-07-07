import { CSSProperties, ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, DurationUnit, FlexOmit } from "../types";
import { Box } from "./Box";
import { HTMLElementUtil } from "../utils/html";

export namespace AnimatedFoldable {
    export type StyleCSSProperties = FlexOmit<CSSProperties,
          "width"
        | "maxWidth"
        | "minWidth"
        | "transitionDuration"
        | "transitionProperty"
        | "transitionTimingFunction"
    >
    
    export interface Style {
        start: StyleCSSProperties;
        end  : StyleCSSProperties;
    }

    export function Horizontal({visible, duration, curve, children}: {
        visible: boolean,
        duration: DurationUnit,
        curve?: CurvesUnit,
        children: ReactNode
    }) {
        const visibleRef = useRef<boolean>(visible);
        const wrapperRef = useRef<HTMLDivElement>(null);

        useLayoutEffect(() => {
            const wrapper = wrapperRef.current;
            const wrapperChild = wrapper.firstElementChild as HTMLElement;
            const startRect = wrapper.getBoundingClientRect();

            wrapperChild.ontransitionend = event => {
                event.stopPropagation();
            }
            
            if (visible == visibleRef.current) {
                wrapper.style.width = visible ? null : "0px";
                wrapperChild.style.width = `${startRect.width}px`;
            } else {
                wrapper.style.width = null;
                wrapperChild.style.width = null;

                if (visible) {
                    const endRect = wrapper.getBoundingClientRect();

                    wrapper.style.width = `${startRect.width}px`;
                    wrapperChild.style.width = `${startRect.width}px`;

                    HTMLElementUtil.reflow(wrapper);
    
                    wrapper.style.width = `${endRect.width}px`;
                    wrapper.ontransitionend = () => {
                        wrapper.style.width = null;
                        wrapperChild.style.width = null;
                    }
                    
                    wrapperChild.style.width = `${endRect.width}px`;
                } else {
                    const unsetRect = wrapper.getBoundingClientRect();

                    wrapper.style.width = `${startRect.width}px`;
                    wrapperChild.style.width = `${unsetRect.width}px`;
    
                    HTMLElementUtil.reflow(wrapper);
    
                    wrapper.style.width = `0px`;
                    wrapper.ontransitionend = null;
                }
            }

            visibleRef.current = visible;
        }, [visible]);

        return (
            <Box
                refer={wrapperRef}
                transitionProperty="width"
                transitionDuration={duration}
                transitionTimingFunction={curve}
                children={<div>{children}</div>}
            />
        )
    }
}