import { ReactNode, useLayoutEffect, useRef } from "react";
import { Box } from "./Box";

export function AnimatedSize({children, duration, timingFunction}: {
    children: ReactNode,
    duration: string,
    timingFunction?: string,
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const presizeRef = useRef<{width: number, height: number}>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;

        presizeRef.current = {
            width: wrapper.firstElementChild.clientWidth,
            height: wrapper.firstElementChild.clientHeight
        }

        wrapper.style.width  = `${presizeRef.current.width}px`;
        wrapper.style.height = `${presizeRef.current.height}px`;

        // Called when a child is added or removed, or the style changes.
        const observer = new MutationObserver(records => {
            const width  = wrapper.firstElementChild.clientWidth;
            const height = wrapper.firstElementChild.clientHeight;

            wrapper.style.width  = `${width}px`;
            wrapper.style.height = `${height}px`;
        });

        observer.observe(wrapper, {attributes: true, childList: true, subtree: true});

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <Box
            refer={wrapperRef}
            transitionProperty="width, height"
            transitionDuration={duration}
            transitionTimingFunction={timingFunction}
        >
            <Box minWidth="max-content" minHeight="max-cotnent">
                {children}
            </Box>
        </Box>
    )
}