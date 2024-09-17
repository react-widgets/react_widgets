import { ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, DurationUnit, SizeUnit } from "../types";
import { Box } from "./Box";
import { Row } from "./Row";
import { Column } from "./Column";
import { DOMRectUtil } from "@web-package/utility"

export namespace TabNavigation {
    export interface Style {
        backgroundColor?: string,
        borderRadius?: string
        width?: string,
        thickness?: string
    }

    export const defualtStyle: Style = {
        backgroundColor: "black",
        width: "100%",
        thickness: "3px"
    };

    /**
     * Returns the element of navigation item corresponding given index
     * by considering the ignore element.
     */
    function getItemByIndex(children: HTMLCollection, index: number) {
        const length = children.length;
        if (index > length) {
            throw new Error(`The index of TabNavigation is overflowed. (given: ${index} > length: ${length})`);
        }

        let ignoreCount = 0;
        for (let i = 0; i <= index; i++) {
            if (children[i + ignoreCount].className == "ignore") ignoreCount++;
        }

        return children[index + ignoreCount];
    }

    export function Horizontal({children, index, style, duration, curve, gap}: {
        children: ReactNode,
        index?: number,
        style?: Style
        duration: DurationUnit,
        curve?: CurvesUnit,
        gap?: SizeUnit
    }) {
        const indexedRef = useRef<number>(index);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const rawStyle = {
            ...defualtStyle,
            ...style
        }

        console.assert(index >= 0, "The index of TabNavigation cannot be negative.");
        console.assert(index != Infinity, "The index of TabNavigation cannot be infinity.");

        useLayoutEffect(() => {
            const wrapper = wrapperRef.current;
            const wrapperBody = wrapper.firstElementChild as HTMLElement;
            const wrapperLine = wrapper.lastElementChild as HTMLElement;
            const currentBody = getItemByIndex(wrapperBody.children, index);

            // Apply CSS Transition animation only when a given index changes.
            if (index != indexedRef.current) {
                wrapperLine.style.transitionProperty = "margin, width";
                wrapperLine.style.transitionDuration = duration;
                wrapperLine.style.transitionTimingFunction = curve;
                indexedRef.current = index;
            }

            const bodyRect = DOMRectUtil.intrinsicOf(wrapperBody);
            const itemRect = DOMRectUtil.intrinsicOf(currentBody);

            wrapperLine.style.width = `${itemRect.width}px`;
            wrapperLine.style.marginLeft = `${itemRect.left - bodyRect.left}px`;
            wrapperLine.ontransitionend = () => {
                wrapperLine.style.removeProperty("transition-property");
                wrapperLine.style.removeProperty("transition-duration");
            };
        }, [index]);

        return (
            <Box ref={wrapperRef}>
                <Row gap={gap} children={children} />
                <Box>
                    <Box
                        width={rawStyle.width}
                        height={index != null ? rawStyle.thickness : 0}
                        backgroundColor={rawStyle.backgroundColor}
                        borderRadius={rawStyle.borderRadius}
                        transitionDuration={duration}
                        transitionProperty="height"
                        transitionTimingFunction={curve}
                        margin="0 auto"
                    />
                </Box>
            </Box>
        )
    }

    export function Vertical({children, index, style, duration, curve, gap}: {
        children: ReactNode,
        index?: number,
        style?: Style
        duration: DurationUnit,
        curve?: CurvesUnit,
        gap?: SizeUnit
    }) {
        const indexedRef = useRef<number>(index);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const rawStyle = {
            ...defualtStyle,
            ...style
        }

        console.assert(index >= 0, "The index of TabNavigation cannot be negative.");
        console.assert(index != Infinity, "The index of TabNavigation cannot be infinity.");

        useLayoutEffect(() => {
            const wrapper = wrapperRef.current;
            const wrapperBody = wrapper.lastElementChild as HTMLElement;
            const wrapperLine = wrapper.firstElementChild as HTMLElement;
            const currentBody = getItemByIndex(wrapperBody.children, index);

            // Apply CSS Transition animation only when a given index changes.
            if (index != indexedRef.current) {
                wrapperLine.style.transitionProperty = "margin, height";
                wrapperLine.style.transitionDuration = duration;
                wrapperLine.style.transitionTimingFunction = curve;
                indexedRef.current = index;
            }

            const bodyRect = DOMRectUtil.intrinsicOf(wrapperBody);
            const itemRect = DOMRectUtil.intrinsicOf(currentBody);

            wrapperLine.style.height = `${itemRect.height}px`;
            wrapperLine.style.marginTop = `${itemRect.top - bodyRect.top}px`;
            wrapperLine.ontransitionend = () => {
                wrapperLine.style.removeProperty("transition-property");
                wrapperLine.style.removeProperty("transition-duration");
            };
        }, [index]);

        return (
            <Box display="flex" ref={wrapperRef}>
                <Box display="flex" alignItems="center">
                    <Box
                        width={index != null ? rawStyle.thickness : 0}
                        height={rawStyle.width}
                        backgroundColor={rawStyle.backgroundColor}
                        borderRadius={rawStyle.borderRadius}
                        transitionDuration={duration}
                        transitionProperty="width"
                        transitionTimingFunction={curve}
                    />
                </Box>
                <Column gap={gap} children={children} />
            </Box>
        )
    }
}