import { useLayoutEffect, useRef, useState } from "react";
import { DurationUnit, MeasuredSize } from "../types"
import { Box } from "./Box";
import { Row } from "./Row";
import { ElementUtil } from "@web-package/utility";
import { Property } from "csstype";
import { ReactWidgetsBinding } from "../modules/react_widgets_binding";

export namespace AnimatedSlider {
    export interface Properties {
        index: number;
        duration: DurationUnit;
        viewport?: string;
        overflow?: Property.Overflow,
        // lazyLoad?: boolean;
        children: JSX.Element | JSX.Element[];
    }

    export function Horizontal({
        index,
        duration,
        viewport = "100%",
        overflow = "clip",
        children: pChildren
    }: Properties) {
        const children = Array.isArray(pChildren) ? pChildren : [pChildren];
        const wrapperRef = useRef<HTMLDivElement>(null);
        const willChange = ReactWidgetsBinding.instance.optionValueOf("useWillChange") ? "transform" : undefined;

        return (
            <Box ref={wrapperRef} position="relative" width={viewport} overflowX={overflow as Property.OverflowX}>
                {children.map((child, count) => {
                    const relTranslateX = count * 100;
                    const absTranslateX = relTranslateX - (index * 100);
                    return (
                        <Box
                            position={index == count ? "unset" : "absolute"}
                            width="100%"
                            top="0px"
                            left="0px"
                            transform={`translateX(${absTranslateX}%)`}
                            transitionDuration={duration}
                            transitionProperty="transform"
                            willChange={willChange}
                            children={child}
                        />
                    )
                })}
            </Box>
        )
    }
}