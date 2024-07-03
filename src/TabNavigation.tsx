import { ReactNode, useLayoutEffect, useRef } from "react";
import { CurvesUnit, DurationUnit, SizeUnit } from "./types";
import { Box } from "./Box";
import { Row } from "./Row";

export namespace TabNavigation {
    export interface Style {
        backgroundColor?: string,
        borderRadius?: string
        width?: string,
        thickness?: string
    }

    export const defualtStyle: Style = {
        backgroundColor: "black",
        borderRadius: undefined,
        width: "100%",
        thickness: "3px"
    };

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
            const children = wrapperBody.children;
            const length = children.length - 1;

            if (index > length) {
                throw new Error(`The index of TabNavigation is overflowed. (given: ${index} > length: ${length})`);
            }

            let ignoreCount = 0;

            for (let i = 0; i <= index; i++) {
                const child = children[i + ignoreCount];
                if (child.className == "ignore=auto"
                 || child.className == "ignore=TabNavigation") ignoreCount++;
            }

            let current = children[index + ignoreCount];

            const bodyRect = wrapperBody.getBoundingClientRect();
            const itemRect = current.getBoundingClientRect();

            wrapperLine.style.width = `${itemRect.width}px`;
            wrapperLine.style.marginLeft = `${itemRect.left - bodyRect.left}px`;
        }, [index]);

        return (
            <Box refer={wrapperRef}>
                <Row gap={gap} children={children} />
                <Box transitionDuration={duration} transitionProperty="margin, width">
                    <Box
                        width={rawStyle.width}
                        height={index != null ? rawStyle.thickness : 0}
                        backgroundColor={rawStyle.backgroundColor}
                        borderRadius={rawStyle.borderRadius}
                        transitionDuration={duration}
                        transitionProperty="height"
                        margin="0 auto"
                    />
                </Box>
            </Box>
        )
    }
}