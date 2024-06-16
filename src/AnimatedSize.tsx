import { ReactNode, useLayoutEffect, useRef } from "react";
import { ClipBox } from "./ClipBox";

export function AnimatedSize({children, duration, timingFunction}: {
    children: ReactNode,
    duration: string,
    timingFunction?: string,
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const lowerSizeRef = useRef<{width: number, height: number}>(null);
    const upperSizeRef = useRef<{width: number, height: number}>(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const wrapperInner = wrapper.firstElementChild as HTMLElement;

        const rect = wrapperInner.getBoundingClientRect();
        const size = {
            width: rect.width,
            height: rect.height
        }

        lowerSizeRef.current = size;
        upperSizeRef.current = size;

        // Called when a child is added or removed, or the style changes.
        const observer1 = new MutationObserver(() => {
            wrapper.style.width = null;
            wrapper.style.height = null;
            wrapperInner.style.minWidth = null;
            wrapperInner.style.minHeight = null;

            const rect = wrapperInner.getBoundingClientRect(); // reflowed
            const size = {
                width: rect.width,
                height: rect.height
            }

            // The current size must be different from the previous size.
            if (size.width == upperSizeRef.current.width
             && size.height == upperSizeRef.current.height) {
                return;
            }
            
            upperSizeRef.current = size;

            wrapper.style.width = `${lowerSizeRef.current.width}px`;
            wrapper.style.height = `${lowerSizeRef.current.height}px`;

            wrapperInner.getBoundingClientRect(); // reflowed

            wrapper.style.width  = `${size.width}px`;
            wrapper.style.height = `${size.height}px`;
            wrapperInner.style.minWidth = `${size.width}px`;
            wrapperInner.style.minHeight = `${size.height}px`;
        });

        const observer2 = new ResizeObserver(() => {
            const rect = wrapper.getBoundingClientRect();
            lowerSizeRef.current = {
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