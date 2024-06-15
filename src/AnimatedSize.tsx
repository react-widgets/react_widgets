import { ReactNode, useLayoutEffect, useRef } from "react";
import { Box } from "./Box";
import { ClipBox } from "./ClipBox";

export function AnimatedSize({children, duration, timingFunction}: {
    children: ReactNode,
    duration: string,
    timingFunction?: string,
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const presizeRef = useRef<{width: number, height: number}>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const wrapperChild = wrapper.firstElementChild;

        presizeRef.current = {
            width: wrapperChild.clientWidth,
            height: wrapperChild.clientHeight
        }

        wrapper.style.width  = `${presizeRef.current.width}px`;
        wrapper.style.height = `${presizeRef.current.height}px`;

        // Called when a child is added or removed, or the style changes.
        const observer = new MutationObserver(() => {
            const width  = wrapperChild.clientWidth;
            const height = wrapperChild.clientHeight;

            wrapper.style.width  = `${width}px`;
            wrapper.style.height = `${height}px`;
        });

        observer.observe(wrapper, {attributes: true, childList: true, subtree: true, characterData: true});

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <ClipBox
            refer={wrapperRef}
            transitionProperty="width, height"
            transitionDuration={duration}
            transitionTimingFunction={timingFunction}
        >
            <Box
                minWidth="max-content"
                maxWidth="max-content"
                minHeight="max-cotnent"
                maxHeight="max-content"
                children={children}
            />
        </ClipBox>
    )
}