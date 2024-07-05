import { ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, DurationUnit, SizeUnit } from "../types";
import { Box } from "./Box";
import { Row } from "./Row";
import { Column } from "./Column";

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
        const wrapperRef = useRef<HTMLDivElement>(null);
        const rawStyle = {
            ...defualtStyle,
            ...style
        }

        console.assert(index >= 0, "The index of TabNavigation cannot be negative.");
        console.assert(index != Infinity, "The index of TabNavigation cannot be infinity.");

        useLayoutEffect(() => {
            if (index == null) return;

            const wrapper = wrapperRef.current;
            const wrapperBody = wrapper.firstElementChild as HTMLElement;
            const wrapperLine = wrapper.lastElementChild as HTMLElement;
            const current = getItemByIndex(wrapperBody.children, index);

            const bodyRect = wrapperBody.getBoundingClientRect();
            const itemRect = current.getBoundingClientRect();

            wrapperLine.style.width = `${itemRect.width}px`;
            wrapperLine.style.marginLeft = `${itemRect.left - bodyRect.left}px`;
        }, [index]);

        return (
            <Box refer={wrapperRef}>
                <Row gap={gap} children={children} />
                <Box transitionDuration={duration} transitionProperty="margin, width" transitionTimingFunction={curve}>
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
        const wrapperRef = useRef<HTMLDivElement>(null);
        const rawStyle = {
            ...defualtStyle,
            ...style
        }

        console.assert(index >= 0, "The index of TabNavigation cannot be negative.");
        console.assert(index != Infinity, "The index of TabNavigation cannot be infinity.");

        useLayoutEffect(() => {
            if (index == null) return;

            const wrapper = wrapperRef.current;
            const wrapperBody = wrapper.lastElementChild as HTMLElement;
            const wrapperLine = wrapper.firstElementChild as HTMLElement;
            const current = getItemByIndex(wrapperBody.children, index);

            const bodyRect = wrapperBody.getBoundingClientRect();
            const itemRect = current.getBoundingClientRect();

            wrapperLine.style.height = `${itemRect.height}px`;
            wrapperLine.style.marginTop = `${itemRect.top - bodyRect.top}px`;
        }, [index]);

        return (
            <Box display="flex" refer={wrapperRef}>
                <Box
                    display="flex"
                    alignItems="center"
                    transitionDuration={duration}
                    transitionProperty="margin, height"
                    transitionTimingFunction={curve}
                >
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