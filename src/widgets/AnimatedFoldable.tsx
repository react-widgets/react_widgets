import { ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, DurationUnit } from "../types";
import { Box } from "./Box";
import { HTMLElementUtil } from "../utils/html";

export namespace AnimatedFoldable {
    export function Horizontal({visible, duration, curve, children}: {
        visible: boolean,
        duration: DurationUnit,
        curve?: CurvesUnit,
        children: ReactNode
    }) {
        const visibleRef = useRef<boolean>(visible);
        const wrapperRef = useRef<HTMLDivElement>(null);

        useLayoutEffect(() => {
            if (visible == visibleRef.current) return;

            const wrapper = wrapperRef.current;
            const wrapperTarget = wrapper.firstElementChild as HTMLElement;

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