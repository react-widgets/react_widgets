import { ReactNode, useLayoutEffect, useRef } from "react";
import { Box } from "./Box";

export function AnimatedSize({children, duration, timingFunction}: {
    children: ReactNode,
    duration: string,
    timingFunction?: string,
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const observer = new MutationObserver((list, observer) => {
            console.log(list);
        });
        observer.observe(wrapper, {attributes: true, childList: true});

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
            children={children}
        />
    )
}