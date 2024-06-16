import { ReactNode, useLayoutEffect, useRef } from "react";
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
        const wrapperInner = wrapper.firstElementChild as HTMLElement;

        const rect = wrapperInner.getBoundingClientRect();
        presizeRef.current = {
            width: rect.width,
            height: rect.height
        }

        // Called when a child is added or removed, or the style changes.
        const observer1 = new MutationObserver(() => {
            wrapper.style.width = null;
            wrapper.style.height = null;
            wrapperInner.style.minWidth = null;
            wrapperInner.style.minHeight = null;

            const rect = wrapperInner.getBoundingClientRect(); // reflowed
            const width = rect.width;
            const height = rect.height;

            wrapper.style.width = `${presizeRef.current.width}px`;
            wrapper.style.height = `${presizeRef.current.height}px`;

            wrapperInner.getBoundingClientRect(); // reflowed

            wrapper.style.width  = `${width}px`;
            wrapper.style.height = `${height}px`;
            wrapperInner.style.minWidth = `${width}px`;
            wrapperInner.style.minHeight = `${height}px`;
        });

        const observer2 = new ResizeObserver(() => {
            const rect = wrapperInner.getBoundingClientRect();
            presizeRef.current = {
                width: rect.width,
                height: rect.height
            }
        });

        observer2.observe(wrapper);
        observer1.observe(wrapperInner.firstChild, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        });

        return () => {
            observer1.disconnect();
            observer2.disconnect();
        }
    }, []);

    return (
        <ClipBox
            refer={wrapperRef}
            transitionProperty="width, height"
            transitionDuration={duration}
            transitionTimingFunction={timingFunction}
        >
            <div>{children}</div>
        </ClipBox>
    )
}