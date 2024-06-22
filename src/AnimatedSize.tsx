import { MutableRefObject, ReactNode, useLayoutEffect, useRef } from "react";
import { ClipBox } from "./ClipBox";
import { HTMLElementUtil } from "./utils/html";

export function AnimatedSize({scaleRefer, children, duration, timingFunction}: {
    scaleRefer?: MutableRefObject<HTMLElement>
    children: ReactNode,
    duration: string,
    timingFunction?: string,
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const lowerSizeRef = useRef<{width: number, height: number}>(null);
    const upperSizeRef = useRef<{width: number, height: number}>(null);

    /**
     * Returns a unique size of the given element by calculating
     * for a scale degree.
     */
    const measureSize = (target: HTMLElement): {width: number, height: number} => {
        const paintedSize = target.getBoundingClientRect();
        const scaleX = target.clientWidth / paintedSize.width;
        const scaleY = target.clientHeight / paintedSize.height;
        const tolerance = 0.3;

        return {
            width: paintedSize.width * scaleX + tolerance,
            height: paintedSize.height * scaleY + tolerance
        };
    }

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const wrapperInner = wrapper.firstElementChild as HTMLElement;

        const size = measureSize(wrapperInner);
        {
            lowerSizeRef.current = size;
            upperSizeRef.current = size;
        }

        // Called when a child is reflowed and added or removed,
        // or the style changes.
        const observer1 = new MutationObserver(() => {
            {
                const a = measureSize(wrapperInner.firstElementChild as HTMLElement);
                const b = upperSizeRef.current;

                // The measured size must be different from the previous size.
                if (a.width == b.width && a.height == b.height) {
                    return;
                }
            }

            wrapper.style.width = null;
            wrapper.style.height = null;
            wrapperInner.style.minWidth = null;
            wrapperInner.style.minHeight = null;

            const size = measureSize(wrapperInner); // reflowed

            upperSizeRef.current = size;

            wrapper.style.width = `${lowerSizeRef.current.width}px`;
            wrapper.style.height = `${lowerSizeRef.current.height}px`;

            HTMLElementUtil.reflow(wrapperInner);

            wrapper.style.width = `${size.width}px`;
            wrapper.style.height = `${size.height}px`;
            wrapperInner.style.minWidth = `${size.width}px`;
            wrapperInner.style.minHeight = `${size.height}px`;
        });

        const observer2 = new ResizeObserver(() => {
            lowerSizeRef.current = measureSize(wrapper);
        });

        observer2.observe(wrapper, {});
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